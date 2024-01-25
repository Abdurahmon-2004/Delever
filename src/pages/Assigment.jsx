export default function Assigment() {
  return (
    <div className="mr-[-1700px]   absolute mt-[70px]">
      <div className="w-[1540px] rounded-[6px] h-[640px] bg-white border">
        <input
          type="search"
          placeholder="Поиск..."
          className="border w-[410px] h-[32px] px-4 rounded-[6px] mt-[30px] ml-[30px]"
        />
        <div className="border w-[1256px] h-[148px] mt-4 ml-[30px] rounded-[6px]">
          <div className="flex border justify-between">
            <h2 className="text-[14px] text-lg ml-4 mt-4">Название</h2>
            <h2 className="text-[14px] text-lg mr-[400px] mt-4">
              Краткое навание
            </h2>
          </div>
          <div className="border flex justify-between ">
            <h2 className="ml-4 mt-4">Узбекистан</h2>
            <h2 className="mr-[520px] mt-4">UZ</h2>
          </div>
          <div className=" flex justify-between">
            <h2 className="ml-4 mt-4">Россия</h2>
            <h2 className="  mr-[520px] mt-4">RU</h2>
            <h2 className="  mr-[520px] mt-4">RU</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
