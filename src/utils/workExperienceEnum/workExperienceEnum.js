export const workExperienceTable = reactive([
    {
        title: '工作经历',
        children: [
            {
                info: '工作经历',
                isOperate: true,
                isBtn: true,
                isAnnex: true,
                tableHeader: [
                    {
                        prop2: "employerName",
                        label: "任职单位名称",
                        value: "",
                        type: "input",
                        isMust: true,
                        isDisable: false,
                        rules: [
                            { required: true, message: '请输入任职单位名称', trigger: 'blur' },
                        ],
                    },
                    {
                        prop2: "officeStart",
                        label: "任职开始年月",
                        value: "",
                        type: "date",
                        isMust: true,
                        isDisable: false,
                        rules: [
                            { required: true, message: '请选择任职开始年月', trigger: 'blur' },
                        ],
                        time: "time",
                    },
                    {
                        prop2: "officeEnd",
                        label: "任职结束年月",
                        value: "",
                        type: "date",
                        isMust: false,
                        isDisable: false,
                        time: "time",
                    },
                    {
                        prop2: "unitNature",
                        label: "单位性质类别",
                        value: "",
                        type: "select",
                        isMust: true,
                        isDisable: false,
                        rules: [
                            { required: true, message: '请选择单位性质类别', trigger: 'blur' },
                        ],
                        opt: [],
                        sName: {},
                    },
                    {
                        prop2: "position",
                        label: "任职岗位",
                        value: "",
                        type: "input",
                        isMust: true,
                        isDisable: false,
                        rules: [
                            { required: true, message: '请输入任职岗位', trigger: 'blur' },
                        ],
                    },
                    {
                        prop2: "certifier",
                        label: "证明人",
                        value: "",
                        type: "input",
                        isMust: false,
                        isDisable: false,
                    },
                    {
                        prop2: "rewardsPunishment",
                        label: "奖惩情况",
                        value: "",
                        type: "input",
                        isMust: false,
                        isDisable: false,
                    },
                    {
                        prop2: "isNewest",
                        label: "是否最新",
                        value: "",
                        // type: "select",
                        type: "input",
                        isMust: false,
                        isDisable: true,
                        // opt: [],
                        // sName: {},
                    },
                    {
                        prop2: "teacherAgeLimit",
                        label: "班主任年限",
                        value: "",
                        type: "number",
                        isMust: false,
                        isDisable: false,
                    },
                    {
                        prop2: "isCountry",
                        label: "是否农村",
                        value: "",
                        type: "select",
                        isMust: false,
                        isDisable: false,
                        opt: [],
                        sName: {},
                    },
                    // {
                    //   prop: "uploadResume",
                    //   label: "上传简历",
                    //   value:"",
                    //   type:"upload",
                    // },
                ],
                tableContent: [],
            },
            {
                info: '交流轮岗',
                isOperate: true,
                isBtn: true,
                isAnnex: true,
                tableHeader: [
                    {
                        prop2: "employerName",
                        label: "交流轮岗类型",
                        value: "",
                        type: "select",
                        isMust: true,
                        isDisable: false,
                        rules: [
                            { required: true, message: '请选择交流轮岗类型', trigger: 'blur' },
                        ],
                        opt: [],
                        sName: {},
                    },
                    {
                        prop2: "startTime",
                        label: "开始年月",
                        value: "",
                        type: "date",
                        isMust: true,
                        isDisable: false,
                        rules: [
                            { required: true, message: '请选择开始年月', trigger: 'blur' },
                        ],
                        time: "time",
                    },
                    {
                        prop2: "endTime",
                        label: "结束年月",
                        value: "",
                        type: "date",
                        isMust: false,
                        isDisable: false,
                        time: "time",
                    },
                    {
                        prop2: "oldUnitName",
                        label: "原单位名称",
                        value: "",
                        type: "input",
                        isMust: true,
                        isDisable: false,
                        rules: [
                            { required: true, message: '请输入原单位名称', trigger: 'blur' },
                        ],
                    },
                    {
                        prop2: "workShiftName",
                        label: "交流轮岗单位名称",
                        value: "",
                        type: "input",
                        isMust: true,
                        isDisable: false,
                        rules: [
                            { required: true, message: '请输入交流轮岗单位名称', trigger: 'blur' },
                        ],
                    },
                    {
                        prop2: "isTransfer",
                        label: "是否调动人事关系",
                        value: "",
                        type: "select",
                        isMust: false,
                        isDisable: false,
                        opt: [],
                        sName: {},
                    },
                ],
                tableContent: [],
            },
        ]
    },
])