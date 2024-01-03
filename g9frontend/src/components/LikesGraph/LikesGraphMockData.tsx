interface GraphDataPiece {
    time: string,
    data: number
}

const MonthGraphMockData: GraphDataPiece[] = [
    {
        "time": "2020-01-01",
        "data": 20
    },
    {
        "time": "2020-02-01",
        "data": 30
    },
    {
        "time": "2020-03-01",
        "data": 40
    },
    {
        "time": "2020-04-01",
        "data": 50
    },
    {
        "time": "2020-05-01",
        "data": 60
    },
    {
        "time": "2020-06-01",
        "data": 70
    },
    {
        "time": "2020-07-01",
        "data": 80
    },
    {
        "time": "2020-08-01",
        "data": 90
    },
    {
        "time": "2020-09-01",
        "data": 100
    },
    {
        "time": "2020-10-01",
        "data": 95
    },
    {
        "time": "2020-11-01",
        "data": 90
    },
    {
        "time": "2020-12-01",
        "data": 85
    },
    {
        "time": "2021-01-01",
        "data": 80
    },
    {
        "time": "2021-02-01",
        "data": 75
    },
    {
        "time": "2021-03-01",
        "data": 70
    },
    {
        "time": "2021-04-01",
        "data": 65
    },
    {
        "time": "2021-05-01",
        "data": 60
    },
    {
        "time": "2021-06-01",
        "data": 55
    },
    {
        "time": "2021-07-01",
        "data": 50
    },
    {
        "time": "2021-08-01",
        "data": 65
    },
    {
        "time": "2021-09-01",
        "data": 40
    },
    {
        "time": "2021-10-01",
        "data": 35
    },
    {
        "time": "2021-11-01",
        "data": 30
    },
    {
        "time": "2021-12-01",
        "data": 65
    },
    {
        "time": "2022-01-01",
        "data": 80
    },
    {
        "time": "2022-02-01",
        "data": 15
    }
];


const YearGraphMockData: GraphDataPiece[] = [
    {
        "time": "2023-01-01",
        "data": 88
    },
    {
        "time": "2022-01-01",
        "data": 22
    },
    {
        "time": "2021-01-01",
        "data": 44
    },
    {
        "time": "2020-01-01",
        "data": 55
    },
    {
        "time": "2019-01-01",
        "data": 90
    },
    {
        "time": "2018-01-01",
        "data": 30
    }
];

export {MonthGraphMockData, YearGraphMockData}
export type {GraphDataPiece}
