var evaluationSampleData = [
    [
        [1,1,1,1,1,1,1,0,1,1,0,0,0,0,1,1,1,1,1,1,1],
        [1,0,0,0,0,0,1,0,1,0,0,1,0,0,1,0,0,0,0,0,1],
        [1,0,1,1,1,0,1,0,1,0,0,1,1,0,1,0,1,1,1,0,1],
        [1,0,1,1,1,0,1,0,1,0,0,0,0,0,1,0,1,1,1,0,1],
        [1,0,1,1,1,0,1,0,1,0,1,0,0,0,1,0,1,1,1,0,1],
        [1,0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,1],
        [1,1,1,1,1,1,1,0,1,0,1,0,1,0,1,1,1,1,1,1,1],
        [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,1,1,0,1,0,1,1,0,0,0,0,1,0,1,0,1,1,1,1,1],
        [0,1,0,0,0,0,0,0,1,1,1,1,0,0,0,0,1,0,0,0,1],
        [0,0,1,1,0,1,1,1,0,1,1,0,0,0,1,0,1,1,0,0,0],
        [0,1,1,0,1,1,0,1,0,0,1,1,0,1,0,1,0,1,1,1,0],
        [1,0,0,0,1,0,1,0,1,0,1,1,1,0,1,1,1,0,1,0,1],
        [0,0,0,0,0,0,0,0,1,1,0,1,0,0,1,0,0,0,1,0,1],
        [1,1,1,1,1,1,1,0,1,0,1,0,0,0,0,1,0,1,1,0,0],
        [1,0,0,0,0,0,1,0,0,1,0,1,1,0,1,1,0,1,0,0,0],
        [1,0,1,1,1,0,1,0,1,0,1,0,0,0,1,1,1,1,1,1,1],
        [1,0,1,1,1,0,1,0,0,1,0,1,0,1,0,1,0,0,0,1,0],
        [1,0,1,1,1,0,1,0,1,0,0,0,1,1,1,1,0,1,0,0,1],
        [1,0,0,0,0,0,1,0,1,0,1,1,0,1,0,0,0,1,0,1,1],
        [1,1,1,1,1,1,1,0,0,0,0,0,1,1,1,1,0,0,0,0,1]
    ],
    [
        [1,1,1,1,1,1,1,0,0,0,1,0,0,0,1,1,1,1,1,1,1],
        [1,0,0,0,0,0,1,0,1,1,0,1,0,0,1,0,0,0,0,0,1],
        [1,0,1,1,1,0,1,0,1,0,0,1,0,0,1,0,1,1,1,0,1],
        [1,0,1,1,1,0,1,0,0,0,0,1,1,0,1,0,1,1,1,0,1],
        [1,0,1,1,1,0,1,0,0,0,0,1,1,0,1,0,1,1,1,0,1],
        [1,0,0,0,0,0,1,0,0,1,0,1,0,0,1,0,0,0,0,0,1],
        [1,1,1,1,1,1,1,0,1,0,1,0,1,0,1,1,1,1,1,1,1],
        [0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0],
        [0,1,1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,0],
        [1,0,0,0,0,1,0,1,1,1,1,0,1,1,0,0,1,1,1,1,1],
        [1,0,1,1,1,0,1,1,0,1,0,1,1,0,1,0,0,0,1,0,0],
        [0,1,1,1,0,0,0,1,0,1,0,0,0,1,0,0,1,0,1,1,0],
        [1,0,1,1,0,0,1,0,0,1,0,1,1,0,0,0,0,0,1,0,0],
        [0,0,0,0,0,0,0,0,1,0,0,1,0,1,0,1,0,0,1,1,0],
        [1,1,1,1,1,1,1,0,0,0,1,0,1,1,1,1,0,1,0,1,1],
        [1,0,0,0,0,0,1,0,1,1,0,0,0,1,1,1,0,0,1,1,0],
        [1,0,1,1,1,0,1,0,0,0,0,1,1,0,1,1,0,0,0,1,1],
        [1,0,1,1,1,0,1,0,1,0,1,0,0,1,0,0,1,1,0,1,0],
        [1,0,1,1,1,0,1,0,1,1,1,0,1,1,0,0,1,1,0,0,0],
        [1,0,0,0,0,0,1,0,1,1,1,1,0,0,1,1,0,1,0,0,0],
        [1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,1,0,0,1,1,0]
    ]
];

var evaluationRoleDataProvider = [
    {
        rule: 1,
        result: { horizontal: 88, vertical: 92, total: 180 },
        data: evaluationSampleData[0]
    },
    {
        rule: 2,
        result: { found: 30, total: 90 },
        data: evaluationSampleData[0]
    },
    {
        rule: 3,
        result: { cols: 1, rows: 1, total: 80 },
        data: evaluationSampleData[0]
    },
    {
        rule: 4,
        result: { dark: 213, all: 441, total: 0 },
        data: evaluationSampleData[1]
    }
];
