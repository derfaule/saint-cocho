// Nuevo Proyecto — content only; layout/behavior lives in derfaule/saint-cocho-theme (story-grid)
const stories = [
    {
        title: "Título uno",
        subtitle: "Subtítulo uno",
        content: ["Descripción breve, por escribir."],
        // image: 'images/uno.png',
        // youtubeUrl: 'https://www.youtube.com/watch?v=VIDEO_ID'
    },
    {
        title: "Título dos",
        subtitle: "Subtítulo dos",
        content: ["Descripción breve, por escribir."]
    },
    {
        title: "Título tres",
        subtitle: "Subtítulo tres",
        content: ["Descripción breve, por escribir."]
    }
];

StoryGrid.mount({ list: '#storiesGrid', stories });
