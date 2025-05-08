<template>
    <svg ref="svg">
        <foreignObject v-for="item in skills"
         :key="item.name"
         :x="item.x"
         :y="item.y"
         width=0
         height=0
         class="graph"
         >
         <div xmlns="http://www.w3.org/1999/xhtml" class="centered-content">
            <skillicon :name="item.name" :level="item.level" />     
        </div>         
        </foreignObject>
    </svg>
</template>

<script>
import * as d3 from "d3";
import skillsets from "@/data/skillsets";
import skillicon from "@/components/SkillIconAutoCategory.vue";

export default {
    name: "TagGraph",
    mounted() {
        this.renderChart();
        window.addEventListener("resize", this.onResize);
    },
    beforeUnmount() {
        window.removeEventListener("resize", this.onResize);
    },
    data() {
        return {
            skills: skillsets
        }
    },
    methods: {
        renderChart() {
            const groups = {
                'C++': ['DirectX', 'Windows API', 'Siv3D', 'Visual Studio', 'Git', "cocos2d-x", 'Unreal Engine'],
                'C': ['DirectX', 'Windows API', 'Visual Studio'],
                'C#': ['Unity', 'Visual Studio', 'Git'],
                'Java': ['Unity', 'Android Studio', 'Android'],
                'JavaScript': ['CocosCreater', 'Vue.js', 'Capacitor', 'Web'],
                'PHP': ['Web', 'Phalcon', 'Laravel'],
                'Go': ['Web', 'Docker'],
                'Python': ['Windows', 'Docker'],
                'Haskell': ['Docker'],
                'Perl': ['Web'],
                'Zephir': ['PHP', 'Web'],
                'MATLAB': ['Linux'],
                'Prolog': ['Linux'],
                'HLSL': ['DirectX', 'Siv3D', 'Unity', 'GLSL'],
                'GLSL': ['HLSL'],
                'HTML': ['JavaScript', 'css', 'Web'],
                'css': ['HTML', 'Web'],
                'sass': ['css'],
                'SQL': ['MySQL', 'SQLite', 'C++', 'PHP'],
                'DirectX': ['C', 'HLSL', 'Windows API', 'Visual Studio', 'Windows'],
                'Windows API': ['C', 'DirectX', 'Visual Studio', 'Windows'],
                'Siv3D': ['C++', 'HLSL', 'Visual Studio', 'Windows', 'Git'],
                'Unreal Engine': ['C++', 'Visual Studio', 'Perforce', 'Windows'],
                'Unity': ['C#', 'HLSL', 'Visual Studio', 'Git', 'Windows', 'Android', 'iOS', 'Java', 'Web'],
                "cocos2d-x": ['C++', 'Android', 'iOS', 'XCode', 'Mac'],
                'CocosCreater': ['JavaScript', 'Web', 'Mac', 'VS Code'],
                'Phalcon': ['PHP', 'Web', 'SQL', 'Redis', 'Zephir'],
                'Laravel': ['PHP', 'Web', 'SQL'],
                'Vue.js': ['JavaScript', 'HTML', 'sass', 'Web', 'Docker'],
                'Capacitor': ['JavaScript', 'Android'],
                'MySQL': ['SQL', 'PHP', 'AWS'],
                'SQLite': ['SQL', 'C++'],
                'Redis': ['AWS', 'PHP'],
                'Docker': ['Vue.js', 'Capacitor', 'Haskell', 'Web', 'Linux', 'Zephir'],
                'Vagrant': ['Phalcon'],
                'AWS': ['MySQL', 'Redis', 'Web'],
                'GitHub Actions': ['Git', 'GitHub'],
                'CircleCI': ['Git', 'Phalcon'],
                'Git': ['C++', 'C#', 'GitHub', 'GitHub Actions', 'JavaScript', 'PHP'],
                'SVN': ['Unity', 'C++'],
                'Unity Version Control':['Unity'],
                'Perforce':['C++', 'Unreal Engine'],
                'Visual Studio': ['C++', 'C#', 'Windows'],
                'VS Code': ['Web', 'Docker'],
                'IntelliJ': ['PHP', 'Go', 'JavaScript'],                
                'Android Studio': ['Java', 'Android'],
                'XCode': ['C++', 'iOS', 'Mac'],
                'Windows': ['Visual Studio', 'Siv3D', 'Unity'],
                'Mac': ['cocos2d-x', 'CocosCreater', 'Unity', 'iOS', 'Android', 'Web'],
                'Linux': ['Docker', 'C++', 'Prolog', 'MATLAB'],
                'Android': ['Java', 'Unity'],
                'iOS': ['Unity', 'Mac'],
                'Nintendo Switch': ['C++', 'C#', 'SVN', 'Unity Version Control'],
                'Web': ['HTML', 'css', 'sass', 'PHP', 'Go', 'VS Code', 'Docker', 'Vue.js', 'Unity'],
                'AR': ['Unity', 'C#', 'Android'],
                'Tobii EyeX':  ['Siv3D', 'Windows'],
                'GitHub': ['Git', 'GitHub Actions'],
                'Atlassian': ['Git'],
                'Google Workspace': ['Unity', 'Siv3D', 'JavaScript'],
                'Slack': ['Unity'],
                'Discord': ['Siv3D'],
                'Notion': ['Unreal Engine'],
                'ChatGPT': ['Docker', 'Web', 'Unity'],
            };

            const links = Object.entries(groups).flatMap(([source, targets]) =>
                targets.map(target => ({ source, target }))
            );

            const svg = d3.select(this.$refs.svg);
            const width = svg.node().clientWidth;
            const height = svg.node().clientHeight;

            const simulation = d3.forceSimulation(this.skills)
                .force("link", d3.forceLink(links).id(d => d.name).distance(80).strength(0.5))
                .force("charge", d3.forceManyBody().strength(-5))
                .force("center", d3.forceCenter(width / 2, height / 2))
                .force("collision", d3.forceCollide(d => 20 * (1 + (d.level - 1) * 0.4)));
            svg
            .selectAll("foreignObject")
            .data(this.skills)
            .call(this.drag(simulation, links));

            simulation.on("tick", () => {
                const width = svg.node().clientWidth;
                const height = svg.node().clientHeight;                    
                skillsets.forEach(d => {
                    d.x = Math.max(0, Math.min(width, d.x));
                    d.y = Math.max(0, Math.min(height, d.y));
                });
            });

            this.simulation = simulation; // 保存して resize 時に使う
        },
        drag(simulation, links) {
            return d3.drag()
                .on("start", (event, d) => {
                    d.fx = d.x;
                    d.fy = d.y;
                    simulation.force("link", d3.forceLink(links)
                        .id(d => d.id)
                        .distance(80)
                        .strength(link => link.source === d ? 2 : 0.2));
                    if (!event.active) simulation.alphaTarget(0.3).restart();
                })
                .on("drag", (event, d) => {
                    d.fx = event.x;
                    d.fy = event.y;
                })
                .on("end", (event, d) => {
                    d.fx = null;
                    d.fy = null;
                    simulation.force("link", d3.forceLink(links)
                        .id(d => d.id)
                        .distance(80)
                        .strength(0.5));
                    if (!event.active) simulation.alphaTarget(0);
                });
        },
        onResize() {
            const width = this.$refs.svg.clientWidth;
            const height = this.$refs.svg.clientHeight;
            this.simulation.force("center", d3.forceCenter(width / 2, height / 2));
            this.simulation.alpha(0.3).restart();
        }
    },
    components: {
        skillicon,
    },
};
</script>
<style lang="scss" scoped>
@import "@/scss/common";
svg {
  width: calc(100vw - 100px);
  height: calc(100vh - 150px);
}
.graph {
    white-space: nowrap;
    overflow: visible;
}
.centered-content {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center; /* 横方向の中央 */
  align-items: center;     /* 縦方向の中央 */
}
</style>