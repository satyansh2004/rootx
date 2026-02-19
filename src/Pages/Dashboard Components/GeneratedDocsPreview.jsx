import React from "react";

import { Map as MapIcon, Wheat, Droplets, Thermometer } from "lucide-react";

function GeneratedDocsPreview() {
  return (
    <>
      <div className="flex flex-col">
        <div className="w-80 bg-white border-l border-stone-200 p-6 overflow-y-auto hidden lg:block">
          <h3 className="font-bold text-lg mb-4 flex items-center gap-2 text-emerald-800">
            <Wheat size={20} /> AI Analysis
          </h3>
          <div className="space-y-4">
            <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-100">
              <div className="flex items-center justify-between text-emerald-700 font-semibold mb-1">
                <span>Soil Moisture</span>
                <Droplets size={16} />
              </div>
              <div className="text-2xl font-bold text-emerald-900">68%</div>
              <p className="text-xs text-emerald-600 mt-1">Status: Healthy</p>
            </div>
            <div className="p-4 bg-orange-50 rounded-xl border border-orange-100">
              <div className="flex items-center justify-between text-orange-700 font-semibold mb-1">
                <span>Temperature</span>
                <Thermometer size={16} />
              </div>
              <div className="text-2xl font-bold text-orange-900">24°C</div>
              <p className="text-xs text-orange-600 mt-1">
                Optimal for Rabi crops
                Lorem, ipsum dolor. Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic aut voluptatum consectetur, veritatis non, ipsa nisi repellendus exercitationem qui delectus consequuntur deleniti labore perspiciatis quisquam ratione minus, accusantium temporibus cum eligendi? Magni, nihil distinctio qui officia placeat molestiae eius inventore id quae quo ipsum in asperiores sapiente quaerat? Eius, repudiandae! Dolore adipisci est aspernatur quam laboriosam deleniti itaque voluptatum odit velit expedita esse, ea, recusandae sint quia iste doloribus porro nostrum unde dicta laborum praesentium! Adipisci quo illo numquam, possimus, iure impedit quas pariatur assumenda itaque fugiat, deleniti distinctio expedita in et ex repudiandae repellendus voluptatum. Odio ad quod alias quidem dignissimos autem culpa illum corporis! Eos corrupti dolor nulla dolorem expedita ratione consectetur quasi! Suscipit dolorum exercitationem dignissimos possimus distinctio ratione facilis fuga cupiditate perferendis et eligendi consequatur similique, dolor illum tenetur excepturi, explicabo iure amet itaque maiores? Amet nisi facilis quae blanditiis! Iure ad accusamus ut, assumenda, soluta magnam inventore laudantium suscipit libero accusantium nisi amet. Iure veniam odit distinctio neque est. Quae similique deserunt beatae totam voluptatibus perspiciatis sapiente fugiat odit. Voluptas eius dolor quas, incidunt optio pariatur non omnis eveniet quasi praesentium, quis exercitationem. Fuga veniam debitis dicta eveniet accusantium molestias quis officiis quidem culpa atque!
              </p>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 w-80 flex justify-center pt-7 border-t bg-white">
          <button className="px-6 py-3 bg-emerald-600 text-white rounded-md relative bottom-3 w-[90%] hover:bg-emerald-900 cursor-pointer">Dowload</button>
        </div>
      </div>
    </>
  );
}

export default GeneratedDocsPreview;
