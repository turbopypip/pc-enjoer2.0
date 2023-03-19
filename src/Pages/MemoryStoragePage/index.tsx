import React from "react";
import ContentAnchorsList from "./ContentAnchorsList";
import Photo1 from "./Photos/MemoryStoragePhoto1.png";
import Photo2 from "./Photos/MemoryStoragePhoto2.png";
import Photo3 from "./Photos/MemoryStoragePhoto3.png";
import Photo4 from "./Photos/MemoryStoragePhoto4.png";
import Photo5 from "./Photos/MemoryStoragePhoto5.png";
import Photo6 from "./Photos/MemoryStoragePhoto6.png";
import Photo7 from "./Photos/MemoryStoragePhoto7.png";
import MoneyIcon from "../../Icons/MoneyIcon.svg";
import PhysicsIcon from "../../Icons/PhysicsIcon.svg";

const MemoryStorage = () => {
  return (
    <div>
      <h1 className="sloganAndAccesoireName">Накопители памяти</h1>

      <ContentAnchorsList />

      <h2 className="contentParagraph" id="descriptionHDD">
        HDD
      </h2>
      <p>
        <img src={MoneyIcon} width="20" height="20" />
        Накопитель на жёстких магнитных дисках (от англ. Hard (magnetic) Disk
        Drive, HDD, HMDD) — запоминающее устройство (устройство хранения
        информации, накопитель) произвольного доступа, основанное на принципе
        магнитной записи. Является основным накопителем данных в большинстве
        компьютеров. HDD имеют гораздо меньшую скорость работы, чем SSD, однако имеют
        гораздо меньшую стоимость за гигабайт.
      </p>
      <p>
        <img src={PhysicsIcon} width="20" height="20" />
        Информация в HDD записывается на жёсткие (алюминиевые или стеклянные)
        пластины, покрытые слоем ферромагнитного материала, чаще всего диоксида
        хрома.
      </p>
      <p>Пример HDD:</p>
      <p>
        <img src={Photo1} className="memoryStoragePhoto1" />
      </p>

      <h2 className="contentParagraph" id="manufacturesHDD">
        Производители HDD
      </h2>
      <p>
        <img src={MoneyIcon} width="20" height="20" />
        На данный момент существует три производителя HDD: Western Digital (WD),
        Toshiba, Seagate. Любые накопители других фирм по факту являются
        продукцией одной из этих компаний, только в другой обёртке.
      </p>

      <h2 className="contentParagraph" id="discsPurposes">
        Назначения дисков
      </h2>
      <p>
        <img src={MoneyIcon} width="20" height="20" />У производителей Toshiba и
        Western Digital диски делятся по цветам. Более дорогая модель с более
        “престижным” с точки зрения производителя цветом почти всегда означает
        большее время гарантии или больший объём кэша. Настоятельно рекомендуем
        покупать жёсткий диск с гарантией от трёх лет, а при наличии средств и
        на все пять. Современный рынок HDD устроен так, что длительная гарантия
        на диск почти всегда означает, что и по остальным параметрам он
        оптимален.
      </p>
      <p>
        У Seagate в качестве замены цветам других производителей диски делятся
        по назначению. Диски, предназначенные для
        чего-либо, почти никак не отличаются от обычных. Любой пользователь, в
        том числе использующий жёсткий диск для хранения записей с камер, не
        заметит разницы в эксплуатации.
      </p>

      <h2 className="contentParagraph" id="discStrength">
        Прочность, независимая статистика по браку Backblaze
      </h2>
      <p>
        <img src={MoneyIcon} width="20" height="20" />
        Самые хрупкие в обращении диски – диски форм-фактора 2,5”. Повышенной
        прочностью по сравнению с 3,5” накопителями обладают только серверные
        диски, внутренняя полость некоторых из которых заполнена гелием вместо
        кислорода. Внешние чехлы или кожухи HDD, особенно выполненные из резины,
        почти не дают дополнительной защиты от ударов.
      </p>
      <p>
        {
          "Если вам интересно узнать, какие из моделей HDD различных производителей чаще подвергаются поломкам и отбраковываются, то "
        }
        <a
          href="https://www.backblaze.com/blog/backblaze-drive-stats-for-2021"
          target="_blank"
          className="linkToTheOtherWebsite"
        >
          <svg
            className="linkIcon"
            viewBox="0 0 16 16"
            version="1.1"
            width="14"
            height="14"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"
            ></path>
          </svg>
          портал Backblaze
        </a>
        {
          " предоставит вам независимые данные, позволяющие выявить самого ненадёжного производителя дисков или узнать среднюю продолжительность жизни накопителя."
        }
      </p>

      <h2 className="contentParagraph" id="HDDFormFactors">
        Форм-факторы HDD
      </h2>
      <p>
        <img src={MoneyIcon} width="20" height="20" />
        HDD бывают двух форм-факторов: 2,5” и 3,5” (” – дюйм). Первый
        форм-фактор используется в основном в ноутбуках за счёт компактности.
        Поэтому ваш выбор – 3,5”. Однако, существуют переходники с 2,5” на 3,5”,
        в том числе и механические, позволяющие расположить разъёмы меньшего
        диска в корпусе на уровень 3,5”.
      </p>
      <p>
        HDD бывают внешними и внутренними. Информация этой статьи
        актуальна для обоих видов. Важно, что внешние жёсткие
        диски подключаются к ПК по-другому разъёму – USB 3.2 Gen 1 и новее. Этот
        разъём имеется не у всех материнских плат. Внешние 3,5” накопители чаще всего дополнительно питаются
        от розетки, когда 2,5” достаточно самого кабеля подключения.
      </p>

      <h2 className="contentParagraph" id="HDDValue">
        Объём HDD
      </h2>
      <p>
        <img src={MoneyIcon} width="20" height="20" />
        Ёмкость или объём HDD характеризует количество информации, которое можно
        записать на диск. Если на этикетке диска указана ёмкость в 1 терабайт,
        то на практике пользователю доступно примерно 931-932 ГБ полезного
        пространства. Это связано с неправильными единицами измерения, которые
        используют производители. В одном их килобайте 1000 байт, в мегабайте,
        соответственно, миллион, в терабайте — триллион. В операционной же
        системе килобайт, мегабайт и прочие единицы измерения кратны 1024.
      </p>
      <p>
        Оценить нужный вам объём Вы можете, посмотрев на средний вес файлов, с
        которыми Вы будете работать. Для большой домашней
        кинотеки объём в 1-2 терабайта довольно быстро иссякнет, если Вы конечно
        не будете удалять фильмы. Для любых профессиональных проектов кроме
        музыкальных советуем брать диски большего объёма.
      </p>

      <h2 className="contentParagraph" id="spinSpeed">
        Скорость вращения шпинделя
      </h2>
      <p>
        <img src={MoneyIcon} width="20" height="20" />
        Основная характеристика, отвечающая за скорость работы диска при
        последовательном чтении или записи информации. Основные популярные
        значения — 5400, 7200, 10000 и 15000 оборотов в минуту, хотя есть модели
        и с промежуточными значениями. Несмотря на наличие различных
        скоростей мы не рекомендуем устанавливать операционную систему на HDD,
        так как разница в скоростях загрузки с SSD в среднем пятикратная.
      </p>
      <p>
        Чем быстрее вращается мотор, тем быстрее пролетают под «головкой»
        сектора блинов.
      </p>

      <h2 className="contentParagraph" id="IOPS">
        Количество операций ввода-вывода в секунду (IOPS)
      </h2>
      <p>
        <img src={MoneyIcon} width="20" height="20" />
        IOPS – возможность жёсткого диска по чтению и записи определённого
        количества блоков (обычно, по 4 килобайта) информации за одну секунду.
        Чем больше значение IOPS — тем быстрее диск может проводить операции с
        файлами.
      </p>

      <h2 className="contentParagraph" id="cacheMemoryValue">
        Объём кеш-памяти
      </h2>
      <p>
        <img src={MoneyIcon} width="20" height="20" />
        Кеш-память - специальный высокоскоростной буфер, в котором остаются
        файлы на чтение или запись, для более быстрого обращения к ним. Чем больше объём кеш-памяти, тем проще диску
        работать с большим количеством маленьких файлов. Рекомендуемый объём
        кэша для большинства пользователей – от 32 Мб.
      </p>

      <h2 className="contentParagraph" id="connectionInterface">
        Интерфейс подключения
      </h2>
      <p>
        <img src={MoneyIcon} width="20" height="20" />
        HDD подключаются к материнской плате двумя основными способами – через
        разъём SATA или SAS. Первый тип подключения используется в любых ПК.
        Второй тип подключения характерен для серверных дисков.
      </p>

      <h2 className="contentParagraph" id="HDDSelectionAlgorithm">
        Алгоритм выбора HDD
      </h2>
      <p>
        <img src={MoneyIcon} width="20" height="20" />
        1. По желанию, оцените статистику брака производителей дисков.
        <br />
        <br />
        2. Определитесь с требуемым форма-фактором и объёмом, кэшем памяти и
        интерфейсом подключения.
        <br />
        <br />
        3. Учитывайте гарантийный срок накопителя при покупке.
        <br />
        <br />
        4. Отдавайте предпочтение дискам с большей скоростью вращения шпинделя
        только за сравнительно небольшие деньги, особенно если на вашем диске
        будут запускаться ёмкие файлы различных редакторов или игры.
        <br />
        <br />
        5. Учтите накопитель с точки зрения блока питания, удостоверившись что
        Вы имеете достаточное число кабелей питания.
      </p>

      <h2 className="contentParagraph" id="descriptionSSD">
        SSD
      </h2>
      <p>
        <img src={MoneyIcon} width="20" height="20" />
        Твердотельный накопитель (от англ. Solid-State Drive, SSD) —
        компьютерное энергонезависимое немеханическое запоминающее устройство на
        основе микросхем памяти, альтернатива жёстким дискам (HDD). Наиболее
        распространённый вид твердотельных накопителей использует для хранения
        информации флеш-память типа NAND, однако существуют варианты, в которых
        накопитель создаётся на базе DRAM-памяти, снабжённой дополнительным
        источником питания — аккумулятором.
      </p>
      <p>
        По сравнению с традиционными жёсткими дисками твердотельные накопители
        имеют меньший размер и вес, являются беззвучными, а также многократно
        более устойчивы к повреждениям (например, при падении) и имеют гораздо
        бóльшую скорость производимых операций. В то же время, они имеют в
        несколько раз бóльшую стоимость за гигабайт и меньшую износостойкость
        (ресурс записи).
      </p>
      <p>
        Помимо микросхем памяти, подобный накопитель содержит
        управляющий контроллер.
      </p>

      <h2 className="contentParagraph" id="SSDForm-factors">
        Виды и Форм-факторы SSD
      </h2>
      <p>
        <img src={MoneyIcon} width="20" height="20" />
        SSD-накопители бывают четырёх самых распространённых видов: SATA, M.2,
        PCI-E, U.2. Последний вид по сути является подключённым в переходник на
        PCI-E M.2 накопителем. SATA накопители, как правило, не отличаются друг
        от друга. А вот у M.2 накопителей есть два главных отличия: по ключу
        подключения и по размеру.
      </p>
      <p>SATA SSD:</p>
      <p>
        <img src={Photo2} className="memoryStoragePhoto2" />
      </p>
      <p>M.2 SSD:</p>
      <p>
        <img src={Photo3} className="memoryStoragePhoto3" />
      </p>
      <p>M.2 SSD в переходнике на PCI-E:</p>
      <p>
        <img src={Photo4} className="memoryStoragePhoto4" />
      </p>
      <p>PCI-E SSD:</p>
      <p>
        <img src={Photo5} className="memoryStoragePhoto5" />
      </p>
      <p>U.2 SSD с кабелем подключения и переходником на M.2 (слева):</p>
      <p>
        <img src={Photo6} className="memoryStoragePhoto6" />
      </p>
      <p>
        SSD накопители формата M.2 имеют различные ключи подключения к
        материнской плате. Ключ накопителя должен
        соответствовать входу на материнской плате.
      </p>
      <p>
        <img src={Photo7} className="memoryStoragePhoto7" />
      </p>
      <p>
        Вы не сможете подключить накопитель только с ключом M в вход ключа B.
        Если на накопителе два ключа, то, в зависимости от производителя, он
        может поддерживаться платой с ключом M. Уточнить это Вы можете в
        технических характеристиках – если в параметрах разъёма будет указана
        шина SATA, то накопитель ключа B совместим. Если Вы имеете накопитель
        ключа M, то будет лучше, если Вы приобретёте плату с радиаторами и на
        M.2 накопители, так как именно такие SSD греются больше всего.
      </p>

      <h2 className="contentParagraph" id="SpeedSSD">
        Скорости SSD накопителей
      </h2>
      <p>
        <img src={MoneyIcon} width="20" height="20" />
        Если Вы имеете примерно представление о скоростях различных накопителей,
        то Вы должны понимать, что скорости, указываемые
        производителями, являются максимальными, а средние скорости накопителей
        меньше на ~20%. Одни из лидирующих по скорости среди накопителей – M.2
        SSD, однако такие накопители с скоростями, сильно отличающимися от SATA
        SSD стоят крайне дорого, да и скорости таких накопителей могут
        понадобиться вам, только если Вы достаточно часто работаете с файлами
        огромных объёмов (50 Гб и более).
      </p>
      <p>
        Поэтому, для большинства пользователей в рамках SSD отличий по скорости
        в зависимости от типа подключения почти нет, однако если Вы планируете
        подключать M.2 накопитель Вы должны знать о двух нюансах. Первый из них
        состоит в том, что скорость M.2 накопителя, подключённого к одной и той
        же материнской плате может отличаться, в зависимости от организации
        обмена данных разъёма с процессором.
      </p>
      <p>
        Накопители, совершающие обмен информации через чипсет к процессору,
        могут быть равны по скорости с накопителями, соединёнными напрямую с
        процессором через линии PCI-E только при малом объёме читаемых или
        записываемых файлов. На материнских платах AMD различия в скоростях
        чтения и записи от типа подключения могут достигать 50% на слабых
        процессорах типа Ryzen 5 2400G. В целом, можно сказать, что чем новее
        ваш чипсет, тем меньше будут эти различия.
      </p>
      <p>
        Если Вы собираетесь использовать более, чем один M.2 или PCI-E
        накопитель, то вам стоит найти в сети сравнительные тесты скорости в
        зависимости от типа подключения любого накопителя со схожими
        параметрами. Второй нюанс заключается в том, что, подключая M.2
        накопитель, Вы можете лишиться возможности подключить больше устройств,
        подключаемых через SATA, SATA-E или PCI-E, поскольку M.2 накопитель
        резервирует для своих нужд одну или несколько из этих линий.
      </p>
      <p>
        Поэтому если Вы собираетесь подключать множество устройств по одной из
        этих линий, вместе с M.2 накопителем, учтите, какие именно линии подключения перестанут работать при
        задействовании M.2 разъёма в спецификации выбранной материнской платы.
      </p>
      <p>
        Если бюджет на SSD накопитель невелик, то в любом
        случае даже самый дешёвый SSD будет быстрее HDD в разы. В связи с этим,
        Вы, к примеру, можете использовать SSD маленького объёма для хранения
        операционной системы, что многократно облегчит вам жизнь.
      </p>
      <p>
        Вы должны понимать, что если Вы планируете, к примеру,
        пользоваться ёмкими программами, которые устанавливаются из-за специфики
        работы только на системный диск, то для операционной системы лучше всего
        выделить диск объёмом от 120 гигабайт.
      </p>

      <h2 className="contentParagraph" id="NVMe">
        Стандарт NVMe
      </h2>
      <p>
        <img src={MoneyIcon} width="20" height="20" />
        Около 50% накопителей M.2 и PCI-E накопителей поддерживают протокол
        NVMe, уменьшающий задержки при выполнении команд накопителя. Конечно,
        этот стандарт даёт прирост производительности, но по сравнению с
        переходом от HDD на SSD он крайне незначителен, даже если тесты
        отдельных операций с этим стандартом могут показывать крайне высокий
        результат по сравнению с SSD без NVMe, поскольку в таких тестах нет
        ничего общего с реальными задачами накопителя. Накопитель с высокой скоростью работы чаще всего будет поддерживать этот
        стандарт.
      </p>

      <h2 className="contentParagraph" id="TypesSSD">
        Типы памяти SSD накопителей
      </h2>
      <p>
        Существует три оптимальных для покупки вида памяти SSD: TLC, MLC, SLC.
        MLC память является более износостойкой, однако наличие не раскрываемых
        производителем факторов производства делает оценку памяти по
        износостойкости почти бесполезной. SLC память чаще всего самая быстрая,
        за ней – MLC и TLC.
      </p>
      <p>
        Рассматривать типы памяти для выделения самых скоростных накопителей
        имеет смысл только для этих трёх видов памяти (рекомендуем рассматривать
        к покупке только их). При выборе типа памяти Вы можете гарантированно
        опираться только на тесты максимального ресурса перезаписи определённых
        накопителей, чтобы выявить надёжную модель.
      </p>
      <p>
        3D XPoint – альтернатива флеш-памяти, новейший тип памяти
        твердотельных накопителей. 3D XPoint потенциально быстрее флеш-памяти и
        более долговечна. 3D XPoint создана совместными усилиями компаний Intel
        и Micron, накопители на базе Micron не имеют широкого
        распространения, а вот накопители Intel Optane на базе 3D XPoint
        присутствуют на рынке.
      </p>
      <p>
        Intel Optane – это SSD с интерфейсом PCI-E через разъёмы подключения M.2
        и U.2 (или просто M.2 SSD). У отдельных из моделей на интерфейсе PCI-E 4.0 х4 колоссальнейшие
        скорости обработки данных: чтение – до 7200 Мб/с, запись – 6200 Мб/с. А
        вот Intel Optane с интерфейсом PCI-E 3.0 х4 обладают весьма заурядными
        способностями - обрабатывают данные не более 2500 Мб/с.
      </p>
      <p>
        <img src={PhysicsIcon} width="20" height="20" />
        3D XPoint – тип
        энергонезависимой ячеечной памяти с механизмом записи информации в
        ячейки, базирующемся на изменении сопротивления материала.
      </p>

      <h2 className="contentParagraph" id="ControllerSSD">
        Контроллер SSD накопителей
      </h2>
      <p>
        <img src={MoneyIcon} width="20" height="20" />
        Если Вы хотите только приобрести SSD с хорошим
        контроллером, оценивайте накопитель по ресурсу перезаписи TBW, чем он
        больше, тем эффективнее контроллер. Это первая характеристика, которая
        будет косвенно указывать на хороший или плохой контроллер. Вторая
        характеристика - быстродействие накопителя, т.е. обещаемые
        производителем, но главное - реальные в синтетических тестах скорости
        чтения и записи данных.
      </p>
      <p>
        <img src={PhysicsIcon} width="20" height="20" />
        Контроллер SSD, он же контроллер NAND-памяти – это его логический
        компонент. Именно он сообщается с контроллером компьютера по тому или
        иному интерфейсу – SATA, PCI-E, USB. Контроллер управляет в целом
        работой накопителя и, в частности, процессом записи данных в ячейки
        памяти. Контроллер решает, в какие ячейки производить запись данных,
        управляет кэшем (сверхбыстрой памятью маленького объёма), оптимизирует
        скорость записи, обеспечивает максимально возможный срок службы
        накопителя
      </p>
      <p>
        Также он контролирует вышедшие из строя ячейки, управляет шифрованием
        данных, обнаруживает и исправляет ошибки передачи данных, занимается
        оптимизацией записей данных.
      </p>
      <p>
        От контроллера зависит быстродействие накопителя, насколько быстро
        он читает и записывает данные. Эффективная работа контроллера
        может существенно увеличить производительность SSD. В свою очередь
        работа контроллера зависит от его составляющих компонентов и
        характеристик. Значимые компоненты и характеристики контроллера:
      </p>
      <p>
        Процессор - может быть с 32-битной или ARM-архитектурой, одно- или
        многоядерным, с более или менее производительными ядрами,
        отчего напрямую зависит производительность контроллера;
      </p>
      <p>
        Каналы доступа к памяти – их может быть от 2-х до 8-ми. Чем больше
        каналов, тем эффективнее контроллер;
      </p>
      <p>
        Алгоритмы кэширования DRAM – логические алгоритмы, чем они продвинутее,
        тем лучше контроллер будет справляться с работой кэша накопителя;
      </p>
      <p>
        Поддержка разных типов памяти – NAND, 3D NAND разной слойности, MLC,
        TLC, QLC;
      </p>
      <p>
        Поддержка разных объёмов памяти – одни контроллеры управляют объёмом
        максимум 512 Гб, другие – максимум 2 Тб, третьи могут справляться даже с
        16 Тб;
      </p>
      <p>
        Порты – есть обычные и двухпортовые контроллеры с удвоенной
        эффективностью.
      </p>

      <h2 className="contentParagraph" id="SSDSelectionAlgorithm">
        Алгоритм выбора SSD
      </h2>
      <p>
        <img src={MoneyIcon} width="20" height="20" />
        1. Определитесь с видом накопителя в зависимости от желаемых скоростей
        рабочих операций.
        <br />
        <br />
        2. В случае выбора M.2 накопителя любого вида, учтите его ключ
        подключения, форму связи с процессором (через чипсет или напрямую),
        размер, выключаемые при задействовании линии M.2 порты.
        <br />
        <br />
        3. Не сортируйте накопители по типу памяти, отдавайте предпочтения
        тестам долговечности накопителей.
        <br />
        <br />
        4. Учтите накопитель с точки зрения блока питания, удостоверившись что
        Вы имеете достаточное число кабелей питания.
      </p>
    </div>
  );
};

export default MemoryStorage;
