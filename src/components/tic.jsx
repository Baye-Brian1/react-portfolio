// --- tic.jsx (and similarly traitz.jsx) ---
import { useState } from "react";
import React from "react";
import { ArrowRight } from "lucide-react"; // Lucide Icon

const Read=({limit=150})=>{
// ... (state and text logic unchanged) ...
  const [isexpand, setIsExpand]=useState(false);

  const texts= `Currently interning at Tic Foundation where I work on mini-projects API integration, blogging systems, and UI/UX improvements Gaining hands-on experience with real projects in javascript Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit maiores ducimus omnis veniam quo placeat sapiente, similique suscipit commodi dolores illo. Illum odit harum quis hic illo, consequuntur molestias? Nostrum optio nulla, 
  .reprehenderit in necessitatibus soluta voluptatibus excepturi et amet omnis asperiores, laborum provident? Tempora quia ipsum assumenda obcaecati aut! Corporis quam magnam, eaque illo ipsam in quia cum vitae neque impedit ad quod, soluta deleniti, quidem molestiae delectus quos officia veniam repellendus. Consequuntur fugit pariatur quam quia aut similique harum, reprehenderit error sapiente
  .ullam ipsa in optio voluptatum voluptas accusamus esse nesciunt? Porro quis non vero totam qui alias, accusamus neque earum fugiat. Numquam quo nostrum, voluptatum maiores vitae illo expedita placeat non consequuntur possimus ut beatae quis aliquam quaerat veniam tempora dolores esse qui maxime incidunt, cumque in rerum dicta? Minus blanditiis ea laborum doloribus soluta sint neque at ratione nam possimus illo nihil accusamus quam veritatis, ullam sunt eos unde repellendus totam? Nostrum, soluta
  . Deserunt incidunt officiis voluptatibus reprehenderit cupiditate beatae ab fugiat, tenetur quibusdam laborum eius ut sapiente ducimus distinctio atque alias. Quasi cumque obcaecati ullam distinctio provident. Impedit odio incidunt animi. Ex aut quis fuga ipsa, dolorem quo! Sint eaque fugit saepe impedit ratione quae exercitationem, laboriosam nesciunt architecto beatae deserunt, itaque error voluptatibus ut doloribus ullam dolore ducimus facere culpa adipisci. Veritatis expedita quidem, officia facere mollitia id ad, dolorem modi, voluptatum sequi eligendi molestiae! Laborum ratione nisi dolorem aliquid earum quasi voluptate sunt enim a! Suscipit autem nobis odio aperiam hic iste? Quasi beatae a natus ducimus, cum voluptates repellat? Vitae quaerat esse id facere libero est! Accusantium cumque impedit, alias beatae sed enim ullam suscipit fugit quaerat veritatis. Quam, maxime non nostrum incidunt id nihil laborum cum perspiciatis sint magni assumenda, optio in commodi tempore placeat. Illum optio voluptatem debitis vel officiis, quis iusto obcaecati quaerat ullam, aliquam quos eveniet deserunt odit ad voluptas recusandae placeat magnam voluptates cumque id illo? Nam amet aliquam non repudiandae, architecto eveniet labore esse facilis nemo error quisquam animi. Excepturi veniam, possimus nihil natus ipsum inventore accusamus nam sunt enim consectetur atque magnam culpa cupiditate non! Fugiat obcaecati quisquam, rem id totam aperiam impedit quam. Minus magnam doloremque sint, ipsam doloribus cum, possimus autem nesciunt veniam dolore architecto voluptatem? Perferendis qui repudiandae accusamus consequuntur tempore mollitia eaque recusandae laudantium asperiores culpa explicabo, amet ut molestias laboriosam doloribus nam dicta sit maiores non, sed neque pariatur consequatur temporibus? Numquam laudantium maxime magnam nesciunt sunt vitae, minus cum temporibus ad? Cupiditate maxime saepe minima quae in sint officia cumque, ea accusamus repellat magnam earum veniam aut unde nihil nostrum natus repudiandae corporis impedit amet incidunt inventore architecto. Delectus nemo autem eos consequuntur ipsam. Iste numquam pariatur nemo tenetur temporibus quidem at odio dolorem laudantium, perspiciatis repellat laborum amet officiis, aperiam omnis expedita deleniti? Inventore veritatis eaque soluta temporibus quos, deleniti non reiciendis. Mollitia facilis hic, itaque sit dolores temporibus laboriosam sapiente qui impedit esse eveniet vitae architecto obcaecati aut adipisci illum tenetur magnam. Ducimus laudantium quo tempora omnis.`
  const reduceTexts= texts.substring(0, limit)+'...';

  return(
    <div>
      {isexpand?(
        <>
        {texts}
        <p className="flex items-center gap-1 cursor-pointer text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition" onClick={()=>setIsExpand(false)}>
          Read Less <ArrowRight size={16}/>
        </p>
        </>
      ):(
        <>
        {reduceTexts}
        {texts.length>limit &&(
          <p className="flex items-center gap-1 cursor-pointer text-white dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition" onClick={()=>setIsExpand(true)}>
            Read More <ArrowRight size={16}/>
          </p>
        )}
        </>
      )
    }
    </div>
  );
};
export default Read;