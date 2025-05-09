<template>
    <svg ref="svg">
        <g ref="g">
            <foreignObject v-for="item in skills" :key="item.name" :x="item.x" :y="item.y" width=0 height=0 class="graph">
            <div xmlns="http://www.w3.org/1999/xhtml" class="centered-content">
                <skillicon :name="item.name" :level="item.level" />
            </div>
        </foreignObject>
        </g>    
    </svg>
</template>

<script>
import * as d3 from "d3";
import skillsets from "@/data/skillsets";
import skillicon from "@/components/SkillIconAutoCategory.vue";

export default {
    name: "TagGraph",
    mounted() {
        this.renderGraph();
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
        renderGraph() {
            const groups = {
                'C++': ['DirectX', 'Windows API', 'Siv3D', 'Visual Studio', 'Git', "cocos2d-x", 'Unreal Engine'],
                'C': ['DirectX', 'Windows API', 'Visual Studio'],
                'C#': ['Unity', 'Visual Studio', 'Git'],
                'Objective-C': ['Unity', 'VS Code', 'iOS'],
                'Java': ['Unity', 'VS Code', 'Android Studio', 'Android'],
                'JavaScript': ['CocosCreater', 'Vue.js', 'Capacitor', 'Web', 'VS Code'],
                'PHP': ['Web', 'Phalcon', 'Laravel', 'VS Code', 'IntelliJ'],
                'Go': ['Web', 'Docker', 'IntelliJ'],
                'Python': ['Windows', 'Docker', 'Web', 'VS Code'],
                'Haskell': ['Docker', 'VS Code'],
                'Perl': ['Web'],
                'Zephir': ['PHP', 'Web', 'IntelliJ'],
                'MATLAB': ['Linux'],
                'Prolog': ['Linux'],
                'HLSL': ['DirectX', 'Siv3D', 'Unity', 'GLSL', 'VS Code', 'Visual Studio'],
                'GLSL': ['HLSL', 'Web'],
                'HTML': ['JavaScript', 'css', 'Web', 'VS Code'],
                'css': ['HTML', 'Web', 'VS Code'],
                'sass': ['css', 'HTML', 'Web', 'VS Code'],
                'SQL': ['MySQL', 'SQLite', 'C++', 'PHP'],
                'DirectX': ['C', 'HLSL', 'Windows API', 'Visual Studio', 'Windows'],
                'Windows API': ['C', 'DirectX', 'Visual Studio', 'Windows'],
                'Siv3D': ['C++', 'HLSL', 'Visual Studio', 'Windows', 'Git'],
                'Unreal Engine': ['C++', 'Visual Studio', 'Perforce', 'Windows'],
                'Unity': ['C#', 'HLSL', 'Visual Studio', 'Git', 'Windows', 'Android', 'iOS', 'Java', 'Objective-C', 'Web'],
                "cocos2d-x": ['C++', 'Android', 'iOS', 'XCode', 'Mac'],
                'CocosCreater': ['JavaScript', 'Web', 'Mac', 'VS Code'],
                'Phalcon': ['PHP', 'Web', 'SQL', 'Redis', 'Zephir'],
                'Laravel': ['PHP', 'Web', 'SQL'],
                'Vue.js': ['JavaScript', 'HTML', 'sass', 'Web', 'Docker', 'VS Code'],
                'Capacitor': ['JavaScript', 'Android'],
                'MySQL': ['SQL', 'PHP', 'AWS'],
                'SQLite': ['SQL', 'C++'],
                'Redis': ['AWS', 'PHP'],
                'Docker': ['Vue.js', 'Capacitor', 'Haskell', 'Web', 'Linux', 'Zephir', 'PHP', 'VS Code'],
                'Vagrant': ['Phalcon', 'PHP'],
                'AWS': ['MySQL', 'Redis', 'Web', 'Linux', 'Docker'],
                'GitHub Actions': ['Git', 'GitHub'],
                'CircleCI': ['Git', 'Phalcon'],
                'Git': ['C++', 'C#', 'GitHub', 'GitHub Actions', 'JavaScript', 'PHP'],
                'SVN': ['Unity', 'C++'],
                'Unity Version Control': ['Unity', 'Nintendo Switch'],
                'Perforce': ['C++', 'Unreal Engine'],
                'Visual Studio': ['C++', 'C#', 'Windows'],
                'VS Code': ['Web', 'Docker'],
                'IntelliJ': ['PHP', 'Go', 'JavaScript'],
                'Android Studio': ['Java', 'Android'],
                'XCode': ['C++', 'iOS', 'Mac'],
                'Windows': ['Visual Studio', 'Siv3D', 'Unity'],
                'Mac': ['cocos2d-x', 'CocosCreater', 'Unity', 'iOS', 'Android', 'Web'],
                'Linux': ['Docker', 'C++', 'Prolog', 'MATLAB'],
                'Android': ['Java', 'Unity', 'Android Studio'],
                'iOS': ['Unity', 'Mac', 'Objective-C'],
                'Nintendo Switch': ['C++', 'C#', 'SVN', 'Unity Version Control'],
                'Web': ['HTML', 'css', 'sass', 'PHP', 'Go', 'VS Code', 'Docker', 'Vue.js', 'Unity'],
                'AR': ['Unity', 'C#', 'Android'],
                'Tobii EyeX': ['Siv3D', 'Windows'],
                'GitHub': ['Git', 'GitHub Actions', 'Web'],
                'Atlassian': ['Git', 'Web'],
                'Google Workspace': ['Unity', 'Siv3D', 'JavaScript', 'Web'],
                'Slack': ['Unity', 'Siv3D', 'Web'],
                'Discord': ['Siv3D', 'Web'],
                'Notion': ['Unreal Engine', 'Web'],
                'ChatGPT': ['Docker', 'Web', 'Unity', 'C++', 'C#', 'Python', 'Vue.js'],
            };
            const skillExistMap = this.skills.reduce((acc, item) => {
                  acc[item.name] = true;
                  return acc;
            }, {});
            const links = Object.entries(groups)
                .flatMap(([source, targets]) =>　targets.map(target => ({ source, target })))
                .filter(({ source, target })=>skillExistMap[source] && skillExistMap[target])
                ;

            const svg = d3.select(this.$refs.svg);
            const g = d3.select(this.$refs.g);
            const width = svg.node().clientWidth;
            const height = svg.node().clientHeight;

            const simulation = d3.forceSimulation(this.skills)
                .force("link", d3.forceLink(links).id(d => d.name).distance(150).strength(0.5))
                .force("charge", d3.forceManyBody().strength(-5))
                .force("center", d3.forceCenter(width / 2, height / 2))
                .force("collision", d3.forceCollide(d => 20 * (1 + (d.level - 1) * 0.4)));
            svg
                .selectAll("foreignObject")
                .data(this.skills)
                .call(this.drag(simulation, links));
            g.attr("transform", "translate(0,0) scale(1)");
            svg.call(
                d3.zoom()
                    .scaleExtent([0.1, 4]) // 最小倍率・最大倍率
                    .on("zoom", (event) => {
                        g.attr("transform", event.transform);
                    })
            );
            this.simulation = simulation; // 保存して resize 時に使う
        },
        drag(simulation, links) {
            return d3.drag()
                .on("start", (event, d) => {
                    d.fx = d.x;
                    d.fy = d.y;
                    simulation.force("link", d3.forceLink(links)
                        .id(d => d.id)
                        .distance(link => link.source === d ? 50 : 150)
                        .strength(link => link.source === d ? 1 : 0.15));
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
                        .distance(150)
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
    touch-action: none; /* ブラウザのデフォルトスクロールを無効化 */
    width: 100%;
    height: 100%;
}

.graph {
    white-space: nowrap;
    overflow: visible;
}

.centered-content {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    /* 横方向の中央 */
    align-items: center;
    /* 縦方向の中央 */
}
</style>