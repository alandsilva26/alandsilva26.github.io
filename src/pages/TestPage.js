import React, { useRef } from "react";

export default function TestPage() {
  const headerRef = useRef();

  const handleScroll = () => {
    if (headerRef) {
      const offset = window.pageYOffset;
      const base = headerRef.current.children;
      // base[0].style.backgroundPositionY = offset * 0.2 + "px";
      base[1].style.backgroundPositionX = offset * 0.05 + "px";

      base[1].style.backgroundPositionY = offset * 0.3 + "px";

      base[2].style.backgroundPositionY = offset * 0.03 + "px";
      // base[2].style.backgroundPositionX = -offset * 0.03 + "px";

      base[3].style.backgroundPositionX = -offset * 0.005 + "px";
    }
  };

  window.addEventListener("scroll", handleScroll);

  return (
    <div>
      <header className="test-header">
        <div className="" ref={headerRef}>
          <div className="header--home-overlay" />
          <div className="header--home-overlay" />
          <div className="header--home-overlay" />
          <div className="header--home-overlay" />
        </div>
      </header>
      <div class="container ">
        <div class="row">
          <div class="col">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
            deserunt numquam necessitatibus expedita accusamus praesentium quae
            inventore facere repudiandae, odit ducimus autem minus fugiat a,
            repellat, et officia debitis porro aspernatur consectetur. Minus
            quas recusandae accusantium? Tenetur sed cum sapiente dolorum
            itaque, delectus soluta! Qui eum laborum, nam dolorem assumenda
            saepe amet laboriosam at est, autem natus velit sapiente nostrum
            tenetur ab, reprehenderit numquam expedita quam temporibus quas.
            Maiores neque, esse et culpa quo explicabo voluptas nesciunt odio
            eaque hic sint optio placeat ipsam quis eos ex veritatis vero totam
            minus! Incidunt, ipsum! Error veniam laudantium nostrum in illo
            dignissimos debitis eaque numquam nisi nemo ab tempora quas
            temporibus corrupti neque fugit aliquam dolorem illum assumenda,
            amet quaerat adipisci voluptatum quam. Illum, rerum corporis
            aspernatur eius ratione commodi provident at earum numquam accusamus
            sed, voluptatum perferendis! Atque soluta cumque eius accusantium
            dolor placeat mollitia natus iste aut aliquid consequuntur, rem,
            iure fuga recusandae temporibus ea itaque nostrum aspernatur commodi
            blanditiis? Pariatur, excepturi. Id maiores vitae odio expedita,
            repudiandae nostrum, aliquam, iusto sapiente quidem sequi saepe nisi
            nesciunt aut totam temporibus ad? Tempora, iure hic, culpa tempore
            dolorem modi unde ipsam reiciendis consectetur, doloremque
            architecto consequatur non voluptatibus eaque soluta eligendi
            laudantium excepturi suscipit. Impedit voluptatibus distinctio rerum
            dolorum! Accusantium a nostrum et ullam maxime asperiores fugit
            dolorem quisquam libero error quos quibusdam laborum dolor soluta
            numquam, reiciendis, quidem blanditiis hic nihil consequuntur in.
            Consequatur quos culpa vero, deleniti voluptas atque, ipsam
            voluptatem magni quo molestiae impedit. Maiores laboriosam
            perferendis ducimus error illum, accusamus est provident repellat
            sunt odio magni, reiciendis facere labore ipsa deleniti. Alias,
            suscipit voluptatibus sit repudiandae harum aspernatur quos
            molestias eveniet quod hic velit aliquid mollitia ipsa blanditiis
            sapiente dicta excepturi provident aperiam? Accusantium, magni quod.
            Corrupti quo voluptates mollitia assumenda nam inventore voluptatem,
            expedita reprehenderit, dignissimos sed maiores! Voluptatum dolorum,
            ea magni cumque accusamus eveniet soluta numquam tempora incidunt
            quia consequatur architecto. Quae hic dolor cumque quo quas natus
            inventore earum cupiditate dignissimos laudantium officiis quod
            consequuntur voluptatum dolorem nulla nihil necessitatibus mollitia,
            a tenetur porro velit ratione doloribus. Quae maiores accusantium,
            consequatur quo laudantium iure labore blanditiis. Totam rerum
            veniam nam velit reiciendis quos! Sint ipsum consequatur sed et,
            repellat tenetur quod consequuntur sit nisi fugiat aperiam? Repellat
            quia laborum quis qui iste mollitia, nemo dolore suscipit aut quo
            magni veniam ipsa praesentium autem eius soluta distinctio?
            Explicabo iure harum id dolores sit. Cupiditate quia ea dolorem iste
            commodi libero rem minus laboriosam maiores nihil quam veniam ipsa
            molestias illo expedita iure debitis porro harum, consequuntur vero
            corporis, autem praesentium. Voluptatibus accusamus quidem saepe id
            excepturi facere quisquam repudiandae quod odit aliquam,
            reprehenderit recusandae culpa officia voluptates itaque corrupti
            enim repellendus quis explicabo, debitis natus, dolorem labore.
            Dicta aspernatur fuga, vero eos maiores odio assumenda laudantium
            fugiat, rerum sint dolorem ex dignissimos ipsa corrupti repellat.
            Quam fugiat inventore saepe laborum modi sunt, excepturi quod iure
            et quae facilis nesciunt! Quod ipsam molestias iste pariatur est a
            eos unde. Ducimus, quis fugiat. Voluptates laboriosam nulla aut
            cumque omnis, autem eum ducimus dolores nobis saepe. Vero deleniti
            iste minus, iusto possimus ipsa eos magni quos necessitatibus fugit
            quae. Amet sequi repellat ad. Ut repellat voluptatibus assumenda
            perspiciatis voluptate, facere id reiciendis commodi ea eos harum
            doloremque, minima in temporibus velit! Ipsam iste, explicabo
            consectetur quo perspiciatis id nemo, animi culpa minus vero
            expedita corrupti deleniti? At cumque modi numquam voluptatum fugit
            soluta nostrum eveniet nulla assumenda eligendi deleniti nam quia
            suscipit iure, incidunt totam eos, ea a nesciunt molestias,
            reiciendis velit itaque blanditiis molestiae. Sint iure eius commodi
            vitae incidunt, eveniet id quae fugiat quo iusto! Atque nisi ullam
            expedita. Cupiditate architecto itaque tempora reprehenderit beatae,
            repudiandae asperiores veritatis fuga magnam iste ipsam ea vitae
            nesciunt labore nihil aut dolorum quia possimus. Esse autem odit
            accusantium vel molestiae possimus doloribus animi fugit totam ipsum
            fuga, dignissimos, placeat saepe rem? Itaque voluptatum tempora
            facilis hic voluptate fugit, eius aperiam tempore accusantium
            eligendi consequatur sed ducimus delectus. Inventore, cupiditate!
            Quia accusantium hic obcaecati omnis molestiae saepe animi.
            Architecto id recusandae rerum, facilis officia impedit, reiciendis
            odio pariatur distinctio culpa modi repudiandae praesentium unde
            perspiciatis sit voluptate consequatur, aliquam perferendis
            obcaecati? Laborum obcaecati impedit officia similique illum eaque!
            Voluptatem natus beatae velit veniam quibusdam, voluptatibus aliquid
            deserunt adipisci quod saepe placeat, officia deleniti fugiat animi
            ab reprehenderit reiciendis dolore, rerum nesciunt necessitatibus
            dolor suscipit! Magnam eos, voluptatum quam velit cupiditate magni
            aspernatur vero nesciunt nisi cumque, exercitationem non inventore
            temporibus animi consequatur obcaecati quod minus ratione rerum
            perspiciatis? Doloremque libero ducimus esse ad hic sint, quisquam
            veniam sed repellendus repellat quia explicabo, iure eos similique,
            tempora illum vero quaerat expedita debitis. Quam eos repellat
            quidem nobis provident laborum temporibus ex consequuntur, quod
            maiores, officia perspiciatis iusto aliquam inventore dolorem et
            praesentium ab minus ratione odio doloremque. Dolor consectetur
            cupiditate voluptatibus qui rerum esse incidunt doloremque ipsam
            sint tenetur eaque deleniti sapiente, architecto dolores delectus
            eveniet adipisci, doloribus repellat ut veritatis ratione nihil
            laudantium. Deserunt expedita nisi libero aspernatur ullam commodi
            vitae et nemo, impedit voluptatibus enim nam laboriosam
            exercitationem consequatur excepturi, nihil non natus aliquam rerum
            quo obcaecati! Sed vero, delectus fugit saepe voluptatum unde
            dolores velit repellat facilis in ratione modi. Ut nobis,
            consectetur dolorem soluta sunt distinctio dolorum delectus facere a
            labore eius dolores ipsam beatae maxime sapiente, blanditiis et
            exercitationem at, ipsum voluptates nam quisquam aliquam?
            Reprehenderit voluptas assumenda ab earum, laborum, labore quod quas
            optio hic corporis porro incidunt dolor vero harum officiis
            molestias rerum tempora minima iusto illo a! In temporibus vel
            adipisci cupiditate sed blanditiis quasi pariatur sint laborum
            consectetur, soluta, rem porro accusamus inventore ullam
            consequuntur aliquid officia numquam amet maiores cumque! Architecto
            consectetur deleniti placeat iure, sapiente blanditiis illo cum
            culpa voluptatibus animi maxime atque recusandae libero beatae
            repudiandae unde ut? Quos neque quis eligendi voluptatum ea, rem
            modi ipsum saepe veritatis deserunt vel, similique adipisci ratione
            suscipit vitae dolorum velit illo corporis totam porro voluptatem
            earum. Doloribus inventore sed blanditiis doloremque nemo error iste
            officiis explicabo quo, neque, repellendus illo temporibus!
          </div>
          <div class="col">Column</div>
          <div class="col">Column</div>
        </div>
      </div>
    </div>
  );
}
