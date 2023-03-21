import React from "react";
import ContentAnchorsList from "./ContentAnchorsList";
import MoneyIcon from "../../Icons/MoneyIcon.svg";
import PhysicsIcon from "../../Icons/PhysicsIcon.svg";

const VideoCard = () => {
  return (
    <div>
      <h1 className="sloganAndAccesoireName">Видеокарта</h1>

      <ContentAnchorsList />

      <h2 className="contentParagraph" id="videoCardDescription">
        Описание
      </h2>
      <p>
        <img src={MoneyIcon} width="20" height="20" />
        Видеокарта (графический адаптер) отвечает за формирование изображения,
        которое появляется на экране компьютера. Это устройство, преобразующее
        графический образ, хранящийся как содержимое памяти компьютера (или
        самого адаптера), в форму, пригодную для дальнейшего вывода на экран
        монитора. Обычно видеокарта выполнена в виде печатной платы (плата
        расширения) и вставляется в слот расширения материнской платы.
      </p>
      <div className="extraInformation">
        <p className="extraInformationHeader">
          Отличие видеокарты от процессора и принцип её работы
        </p>
        <p>
          <img src={PhysicsIcon} width="20" height="20" />
          От процессора видеокарта отличается несколькими основными параметрами:
          количеством ядер, оперативной памятью, назначением работы ядер.
        </p>
        <p>
          В видеокартах, в отличии от процессоров, ядер тысячи. Их основная
          задача – параллельная работа над одной задачей – арифметическими
          вычислениями для отображения пикселей определённого цвета. В это же
          время ядра процессора работают отдельно над совершенно разными
          задачами.
        </p>
        <p>
          Оперативная память видеокарты отличается от системной задержками – они
          гораздо больше, до такой степени, что было бы нецелесообразно
          использовать память видеокарты в системных целях.
        </p>

        <h2 className="contentParagraph">Принцип работы видеокарты</h2>
        <h3 className="contentParagraphTopics">1 этап - растеризация</h3>
        <p>
          Параметры трёхмерных объектов, наблюдаемые вами на мониторе
          изначально, просчитываются в векторном виде. Каждый такой объект
          состоит из треугольников, координаты которых в пространстве
          описываются их вершинами.
        </p>
        <p>
          Задача видеокарты – спроецировать на двумерный монитор векторные
          параметры трёхмерных объектов при помощи геометрических вычислений –
          растеризировать изображение.
        </p>
        <h3 className="contentParagraphTopics">2 этап - текстурирование</h3>
        <p>
          На растрированный объект по текстурным координатам, определяемыми
          вершинами треугольников в пространстве накладывается текстура –
          цветная таблица пикселей определённого разрешения.
        </p>
        <p>
          Для ликвидации искажений при таком наложении применяются различные
          технологии трансформации цвета пикселя, например, трилинейная
          интерполяция, которая вычисляет цвет находящегося под углом объекта
          гораздо реалистичнее.
        </p>

        <h3 className="contentParagraphTopics">
          3 этап - пиксельный шейдинг (затенение)
        </h3>
        <p>
          На сегодняшний день затенение трёхмерных объектов осуществляется за
          счёт карт – специальных текстур, содержащих необходимую информацию.
          Карта нормалей, например, хранит информацию о каждой точке поверхности
          шероховатого объекта.
        </p>
        <p>
          С её помощью описываются векторы проходящего света. Карта
          зеркальностей задаёт коэффициенты отражения различным частям текстуры.
          Карта шероховатостей придаёт объекту рельеф.
        </p>
        <p>
          Карта Альбедо хранит в себе естественный, незатенённый цвет объекта.
          Конечно, это не все существующие на данный момент карты.
        </p>
        <p>
          В конце всех вычислений, связанных с шейдингом, изображение
          отображается на экране.
        </p>
      </div>

      <h2 className="contentParagraph" id="videoCardTypes">
        Виды видеокарт
      </h2>
      <p>
        <img src={MoneyIcon} width="20" height="20" />
        Видеокарты бывают интегрированными и дискретными. Интегрированные -
        встроены в центральный процессор или материнскую плату. Такие видеокарты
        существенно слабее дискретных (покупаемых отдельно) видеокарт.
      </p>
      <p>
        Не рекомендуется рассчитывать на встроенную видеокарту если ваши запросы
        превышают сложность офисных программ или простой графики.
      </p>
      <p>
        Дискретные видеокарты условно разделимы на три вида: “Офисные”, Игровые
        и Профессиональные.
      </p>
      <p>
        Офисные карты чаще всего имеют разрядность шины памяти менее или равной
        64 бит и подходят для одноимённых задач и чуть более сложной, чем у
        интегрированных карт графики.
      </p>
      <p>
        Игровые карты имеют шину разрядности памяти от 128 бит. Их эффективность
        в игровых и, в том числе, профессиональных задачах крайне разнится,
        поэтому обобщить их уровень производительности невозможно.
      </p>
      <p>
        Профессиональные карты предназначены для работы с сложной графикой. Для
        них важен объем памяти и пропускная способность шины. Они часто дороже
        игровых, но в играх могут быть хуже.
      </p>
      <p>
        В продаже сегодня можно встретить видеокарты, выпущенные различными
        компаниями. Однако основные компоненты видеокарт они закупают лишь у
        двух производителей – NVIDIA и AMD. Это значит, что те же видеокарты от
        разных компаний отличаются лишь охлаждением и/или наличием разгона с
        завода, объёмом видеопамяти.
      </p>

      <h2 className="contentParagraph" id="videoCardPoweracity">
        Производительность
      </h2>
      <p>
        <img src={MoneyIcon} width="20" height="20" />
        На производительность видеокарты влияет множество параметров, поэтому
        при выборе проще ориентироваться на то, к какой серии
        компания-производитель относит тот или иной графический адаптер. Гораздо
        важнее этого ознакомится с тестами связок процессоров и видеокарт для
        чёткого понимания того, какую производительность вы получите в
        соответствии со своим бюджетом.
      </p>
      <p>На данный момент nVidia выпускает серии GTX и RTX</p>
      <p>
        Линейка RTX во многих играх крайне сильно отличается по
        производительности за счёт технологии DLSS.
      </p>
      <p>
        В связи с этим, рекомендуем учитывать влияние этой технологии при
        просмотре тестов из сети. Внутри каждой из линеек больший цифровой
        индекс означает лучшую производительность.
      </p>
      <div className="extraInformation">
        <p className="extraInformationHeader">NVIDIA DLSS</p>
        <p>
          <img src={PhysicsIcon} width="20" height="20" />
          NVIDIA DLSS —технология рендеринга на базе искусственного интеллекта,
          которая улучшает производительность и качество графики. Данные для
          работы технологии DLSS добываются благодаря машинному обучению через
          суперкомпьютеры NVIDIA.
        </p>
      </div>

      <p>
        Эти данные загружаются на ПК посредством драйверов NVIDIA Game Ready.
        Тензорные ядра используют свои мощности для активации ИИ в реальном
        времени. Таким образом, суперкомпьютеры NVIDIA повышают вашу
        производительность.
      </p>
      <p>
        {
          "У AMD настолько чёткой иерархии нет, поэтому рекомендуем воспользоваться таблицей для сравнения производительности "
        }

        <a
          href="https://amd.news/obzor/spisok-videokart-amd-ati-radeon/"
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
          здесь
        </a>
      </p>
      <p>
        {
          "Видеокарты AMD имеют аналогичную DLSS технологию – FidelityFX Super Resolution "
        }
        <a
          href="https://gpuopen.com/effects/)"
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
          и другие технологии FidelityFX
        </a>
        {
          ". Также рекомендуем учитывать возможность применения этой технологии при просмотре тестов."
        }
      </p>

      <div className="extraInformation">
        <p className="extraInformationHeader">FidelityFX Super Resolution</p>
        <p>
          <img src={PhysicsIcon} width="20" height="20" />
          FidelityFX Super Resolution - это пространственный масштабатор: он берёт
          текущий сглаженный кадр и увеличивает его до разрешения отображения, не
          полагаясь на другие данные, такие как история кадров или векторы
          движения. Однако, это лишь одна из функций FidelityFX.
        </p>
        <p>
          В основе FSR лежит алгоритм, который обнаруживает и воссоздает края с
          высоким разрешением на исходном изображении. Эти края с высоким
          разрешением являются главным элементом, необходимым для превращения
          текущего кадра в изображение “сверхразрешения".
        </p>
      </div>

      <p>
        Также, для всех видеокарт Nvidia начиная с серии 900 и для видеокарт AMD
        доступна технология NIS (Nvidia Image Scaling) которая также является
        аналогом FSR. Технология FSR более оптимизирована для игр,
        поддерживающих графический API Vulkan. FSR также работает на всех
        видеокартах Nvidia и AMD. NIS, FSR и DLSS предлагают "скалирование", то
        есть увеличение размера исходного изображения с незначительной потерей
        производительности или даже её приростом относительно того же
        разрешения.
      </p>
      <p>
        DLSS и NIS предлагают картинку с наименьшим количеством искажений, в то
        время как FSR создаёт "иллюзию" хорошо выглядящего изображения. Конечно,
        в различных играх эти технологии могут вести себя по-разному и обходить
        друг друга. Крайне важно учитывать эти технологии при просмотре тестов,
        поскольку они могут давать крайне высокий прирост производительности.
      </p>

      <div className="extraInformation">
        <p className="extraInformationHeader">Технология трассировки лучей</p>
        <p>
          <img src={PhysicsIcon} width="20" height="20" />С появлением в 2018-году
          архитектуры видеокарт Turing также появилась революционная технология
          реалистичного просчёта глобального освещения – трассировка лучей.
        </p>
        <p>
          Ранее, вся информация о тенях, задействованная в вычислении сцены,
          хранилась в картах текстур и отображалась для каждого объекта в
          отдельности, а просчитать влияние объектов друг на друга было
          проблематично.
        </p>
        <p>
          Технология трассировки лучей позволила реалистично просчитывать свет в
          обозреваемом игроком пространстве. В определённый момент из камеры
          игрока выходит виртуальный луч, который, сталкиваясь с хорошо
          отражающими свет поверхностями, даёт специальным ядрам трассировки лучей
          информацию о пересечении лучом полигонов сцены.
        </p>
      </div>


      <h2 className="contentParagraph" id="videoCardVideoMemory">
        Видеопамять
      </h2>
      <p>
        <img src={MoneyIcon} width="20" height="20" />
        Два гигабайта – решение для компьютера низкого уровня мощности,
        специализированного для офисных задач или “классических” игр.
      </p>
      <p>
        Четыре гигабайта - решение для компьютера средне-низкого уровня
        мощности, подходит для простой работы с профессиональными графическими
        редакторами или игры в новейшие игры в разрешении экрана 1920x1080 на
        средне-низких настройках, от которых зависит потребляемая видеопамять.
      </p>
      <p>
        Шесть гигабайт - решение для компьютера средне-высокого уровня мощности,
        подходит для работы средней сложности в профессиональных графических
        редакторах или игры в новейшие игры в разрешении экрана 1920x1080 на
        средне-высоких настройках, от которых зависит потребляемая видеопамять.
        <br />
        При игре с более высоким разрешением загруженность видеопамяти сильно
        зависит от игры.
      </p>
      <p>
        Восемь гигабайт – решение для компьютера высокого уровня мощности,
        подходит для работы любой сложности в профессиональных графических
        редакторах или игры в новейшие игры в разрешении экрана 1920x1080 на
        максимальных (без трассировки лучей) настройках, от которых зависит
        потребляемая видеопамять. При игре с более высоким разрешением
        загруженность видеопамяти сильно зависит от игры.
        <br />
      </p>
      <p>
        Двенадцать и более гигабайт – решение для компьютера высокого уровня
        мощности, подходит (избыточно) для работы любой сложности в
        профессиональных графических редакторах или игры в новейшие игры в
        разрешении экрана 2560 x 1440 на максимальных (с трассировкой лучей)
        настройках, от которых зависит потребляемая видеопамять. При игре с
        более высоким разрешением загруженность видеопамяти сильно зависит от
        игры.
        <br />
      </p>

      <div className="extraInformation">
        <p className="extraInformationHeader">Видеопамять графического ускорителя</p>
        <p>
          <img src={PhysicsIcon} width="20" height="20" />
          Видеопамять графического ускорителя — его оперативная память, которая
          отводится для хранения данных, использующихся для формирования
          изображения на экране компьютера.
        </p>
      </div>


      <h2 className="contentParagraph" id="videoCardWidthOfABus">
        Разрядность шины видеопамяти
      </h2>
      <p>
        <img src={MoneyIcon} width="20" height="20" />
        Основное отличие в производительности видеокарт со схожими
        характеристиками, но разной разрядностью шины будет в том, что при более
        высоком разрешении, но одинаковой загрузке видеокарты количество кадров
        в секунду у видеокарты с меньшей шириной шины будет меньше.
      </p>
      <p>
        Степень отличия количества этих кадров у всех пар видеокарт и в разных
        задачах разная, но точно можно сказать что при выборе из схожих по
        характеристикам видеокарт для разрешения выше 1920x1080 лучше взять
        видеокарту с большей шириной шины (конечно, учитывая все остальные
        повышающие производительность технологии).
      </p>
      <p>В офисном компьютере разрядность пренебрегаема.</p>
      <p>Игровому компьютеру необходима разрядность не менее 128 бит.</p>
      <p>
        Профессиональные компьютеры должны иметь разрядность 256 бит, в случае
        если вы собираетесь работать с высокими разрешениями.
      </p>

      <div className="extraInformation">
        <p className="extraInformationHeader">Шина памяти</p>
        <p>
          <img src={PhysicsIcon} width="20" height="20" />
          Шина памяти представляет собой канал между графическим процессором и
          памятью, и чем он шире (чем больше разрядность), тем больше информации
          способна видеокарта обработать за единицу времени.
        </p>
        <p>
          При более высоком разрешении объём потока данных, проходящих через шину
          видеопамяти многократно возрастает, в связи с чем остальные элементы
          видеокарты и процессора начинают испытывать голод данных и
          производительность падает. Такое падение производительности не отразится
          в загрузке видеокарты или других компонентах системы.
        </p>
        <p>
          Увидеть влияние ширины шины можно будет только отобразив во время
          тестирования загруженность видеопамяти карты.
        </p>
      </div>

      <h2 className="contentParagraph" id="videoCardPowerSource">
        Питание
      </h2>
      <p>
        <img src={MoneyIcon} width="20" height="20" />
        Бюджетные видеокарты и решения низшего среднего класса обходятся без
        дополнительного питания.
      </p>
      <p>
        Многие графические адаптеры со средней и высокой производительностью не
        могут обойтись без дополнительного питания. Для этого они комплектуются
        разъемами различных типов.
      </p>
      <p>
        Высокое энергопотребление видеокарты означает, что к блоку питания
        компьютера тоже предъявляются особые требования.
      </p>
      <p>
        Теоретически, вашему блоку питания может потребоваться адаптер для
        подключения питания видеокарты. Как правило такие адаптеры поставляются
        в комплекте с видеокартой. Имеет смысл проверить на наличие в комплекте
        с видеокартой такого адаптера перед покупкой блока питания.
      </p>

      <h2 className="contentParagraph" id="videoCardCooling">
        Охлаждение
      </h2>
      <p>
        <img src={MoneyIcon} width="20" height="20" />
        Видеокарта при интенсивной нагрузке не только потребляет много энергии,
        но и серьезно нагревается. Перегрев может привести к снижению
        производительности, а в худшем случае к выходу графического адаптера из
        строя. Для избежания этого, производители используют системы охлаждения.
      </p>

      <h3 className="contentParagraphTopics">Пассивное охлаждение</h3>
      <p>
        Пассивная система охлаждения представляет собой радиатор, работающий по
        принципу естественного тепловыделения. Проще говоря, металлическая
        пластина отводит тепло, нагревая окружающий воздух.
      </p>
      <p>
        Такое охлаждение бесшумно, однако эффективность таких систем оставляет
        желать лучшего.
      </p>

      <h3 className="contentParagraphTopics">Активное охлаждение</h3>
      <p>
        Активная система охлаждения обычно является гибридной: она состоит из
        радиатора, тепловых трубок и одного или нескольких вентиляторов.
      </p>
      <p>
        КПД такой системы значительно выше по сравнению с пассивными, однако она
        потребляет довольно много энергии и при работе под большой нагрузкой
        может шуметь.
      </p>

      <h3 className="contentParagraphTopics">
        Жидкостное (водяное) активное охлаждение
      </h3>
      <p>
        В некоторых видеокартах используется не воздушное, а жидкостное
        (водяное) активное охлаждение. Такие системы обладают высокой
        эффективностью, но стоят довольно дорого и используются обычно в очень
        дорогих игровых системах.
      </p>

      <h2 className="contentParagraph" id="videoCardBuyingExperience">
        Нюансы покупки
      </h2>

      <h3 className="contentParagraphTopics">Длина и высота карты</h3>
      <p>
        <img src={MoneyIcon} width="20" height="20" />
        Перед покупкой необходимо убедиться в том, что установка видеокарты на
        материнскую плату не перекроет доступ к её компонентам. Видеокарта
        должна поместиться по длине и высоте в корпус вашего ПК. Параметр
        «Максимальная длина видеокарты» указывается в характеристиках
        практически всех компьютерных корпусов, а проблемы с высотой у вас
        возникнут только в случае сборки компактного ПК (с размером корпуса
        менее, чем ATX).
      </p>

      <h3 className="contentParagraphTopics">Разъёмы подключения к монитору</h3>
      <p>
        Существует несколько актуальных способов подключения монитора к
        видеокарте. Если вы собираетесь использовать монитор с частотой
        обновления не более 60 гц, то кабель HDMI – лучший вариант для вас.
        Немного более дорогой вариант, поддерживающий более высокие разрешения с
        более высокой частотой обновления – кабель DisplayPort.
      </p>
      <p>
        HDMI и DisplayPort поддерживают все виды отображения,
        производительность, соответствующая уровню которых достижима
        современными мощностями компьютеров. VGA и DVI – их устаревшие аналоги,
        которые мы не советуем рассматривать к покупке.
      </p>

      <h2 className="contentParagraph" id="videoCardSelectionAlgorithm">
        Алгоритм выбора видеокарты
      </h2>
      <p>
        1. Убедитесь, что ваш основной монитор поддерживает желаемые параметры
        отображения (разрешение, частоту обновления, тип матрицы и различные
        технологии по улучшению качества изображения). Подбирайте видеокарту
        так, чтобы уровень её производительности соответствовал сложности
        изображения.
      </p>
      <p>2. Выберете подходящие объём и ширину шины видеопамяти</p>
      <p>
        3. Проверьте на наличие переходников на разъёмы питания видеокарты, если
        ваш блок питания не имеет подходящие разъёмы.
      </p>
      <p>
        4. Проверьте длину и высоту карты по сравнению с допустимой корпусом.
      </p>
      <p>
        5. Отдавайте предпочтение разогнанным с завода видеокартам, если они
        дороже обычных версий в пределах той суммы, которые вы готовы отдать за
        то, чтобы не разбираться с разгоном карты.
      </p>
      <p>
        6. Учтите серию покупаемой видеокарты и технологии, присущие ей при
        просмотре тестов в сети. Если вы хотите гарантированно получить желаемую
        производительность, вам придётся смотреть сравнительные тесты
        производительности в сети.
      </p>
    </div>
  );
};

export default VideoCard;
