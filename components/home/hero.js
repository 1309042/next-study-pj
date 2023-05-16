import Animation from "./animation"

export default function Hero() {
    return (
        <>
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                    안녕하세요 오현서 입니다!
                <br className="hidden lg:inline-block" />
                    오늘도 좋은 하루 보내세요!
                </h1>
                <p className="mb-8 leading-relaxed">
                미인을 보배를 천하를 그들의 힘있다. 방황하여도, 구하기 소리다.이것은 따뜻한 밝은 생의 어디 동산에는 사막이다. 위하여 꾸며 피고, 보배를 청춘의 얼음 위하여 있는 안고, 때문이다. 싸인 더운지라 남는 아름답고 있는 심장의 철환하였는가? 할지라도 못할 황금시대를 청춘 위하여 동산에는 인간의 수 구할 약동하다. 창공에 위하여 열락의 심장의 것이다. 긴지라 위하여서 밥을 칼이다. 만물은 보이는 풍부하게 것이다. 수 보는 인생에 실로 위하여, 풀밭에 뭇 든 돋고, 교향악이다. 있을 인간의 뼈 착목한는 목숨을 인간이 듣는다. 이것을 것은 가진 얼마나 할지니, 아니다.
                </p>
            <div className="flex justify-center">
            <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                프로젝트 보러가기
            </button>
            </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <Animation />
        </div>
        </>
    )
}