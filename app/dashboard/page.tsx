import DashBoardHeader from "@/components/dashboard/DashBoardHeader"
import DataCard from "@/components/dashboard/DataCard"



const DashBoardPage = () => {
    const dataCardList: dataCard[] = [
        {
            title: "访问量",
            count: 100,
            color: "bg-[#FAF0E6]"
        },
        {
            title: "文章数",
            count: 100,
            color: "bg-[#e0d6f5]"
        },
        {
            title: "评论数",
            count: 100,
            color: "bg-[#ccffdd]"
        },
        {
            title: "用户数",
            count: 100,
            color: "bg-[#ffd9cc]"
        },
    ]
    return (
        <>
            {/* 标题栏 */}
            <DashBoardHeader title="总览" />
            {/* 数据卡片 */}
            <div className="grid grid-cols-4 gap-x-3">
                {
                    dataCardList.map((data, inx) => <DataCard key={inx} data={data} />)
                }
            </div>

            <div className="flex">
                <div className="w-[50vw] h-[30vh]">访客图表</div>
                <div className="flex-1 h-[30vh]">最近发布</div>
            </div>

            <div className="flex">
                <div className="w-[50vw] h-full">最近评论</div>
                <div className="flex-1 h-full">新增用户</div>
            </div>
        </>
    )
}

export default DashBoardPage