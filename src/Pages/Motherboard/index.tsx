import React from "react";
import MoneyIcon from "../../Icons/MoneyIcon.svg";
import PhysicsIcon from "../../Icons/PhysicsIcon.svg";
import Photo1 from "./Photos/motherboardPhoto1.png";
import Photo2 from "./Photos/motherboardphoto2.png";
import Photo3 from "./Photos/motherboardPhoto3.png";
import Photo4 from "./Photos/motherboardPhoto4.png";
import Photo5 from "./Photos/motherboardPhoto5.png";
import Photo6 from "./Photos/motherboardPhoto6.svg";
import Photo7 from "./Photos/motherboardPhoto7.svg";
import Photo8 from "./Photos/motherboardPhoto8.png";
import Photo9 from "./Photos/motherboardPhoto9.svg";
import Photo10 from "./Photos/motherboardPhoto10.svg";
import Photo11 from "./Photos/motherboardPhoto11.svg";
import Photo12 from "./Photos/motherboardPhoto12.svg";
import Photo13 from "./Photos/motherboardPhoto13.svg";
import Photo14 from "./Photos/motherboardPhoto14.svg";
import Photo15 from "./Photos/motherboardPhoto15.png";
import Photo16 from "./Photos/motherboardPhoto16.png";
import Photo17 from "./Photos/motherboardPhoto17.png";
import Photo18 from "./Photos/motherboardPhoto18.png";
import Photo19 from "./Photos/motherboardPhoto19.png";
import Photo20 from "./Photos/motherboardPhoto20.png";
import ContentAnchorsList from "./ContentAnchorsList";
import styles from './styles.module.css';

const Motherboard = () => {
  return (
    <div>
      <h1 className="sloganAndAccesoireName">Материнская плата</h1>

      <ContentAnchorsList />

      <h2 className="contentParagraph" id="motherboardDescription">
        Описание
      </h2>
      <p>
        <img src={MoneyIcon} width="20" height="20" />
        Материнская плата – прямоугольная пластина, исполосованная текстолитом,
        на которой есть множество разъёмов, иногда радиаторы.
      </p>
      <p>
        На плате располагаются и другие элементы. В её левом верхнем углу или в
        центре располагается сокет для процессора.
      </p>
      <p>
        Слева от него – разъемы для периферии, сети. В нижней центральной части
        – литиевая батарея. Справа от сокета – разъёмы для оперативной памяти.
        Снизу от сокета – разъёмы PCI для видеокарт или периферии.
      </p>

      <p>
        <img src={Photo1} className="motherboardPhoto1" />
      </p>

      <h2 className="contentParagraph" id="motherboardSizes">
        Размеры (форм-факторы) материнских плат
      </h2>
      <p>
        <img src={MoneyIcon} width="20" height="20" />
        Форм-фактор материнской платы - установленный производителями стандарт,
        задающий ее габаритные размеры крепления к корпусу, количество и
        расположение отверстий для подключения комплектующих ПК.
      </p>
      <p>
        Этот параметр напрямую влияет, как на внешний вид системного блока, так
        и на вместительность. В контексте выбора материнской платы также стоит
        помнить, что от размера платы зависит тепловыделение и количество
        различных разъёмов на плате. Как правило, в современных ПК в большинстве
        используются платы размера ATX и Micro ATX.
      </p>
      <p>
        Данные форм-факторы подойдут для сборки ПК любой конфигурации, начиная
        от офисного варианта, заканчивая игровым или рабочим компьютером.
      </p>

      <h2 className="contentParagraph" id="motherboardSocket">
        Сокет материнской платы
      </h2>
      <p>
        <img src={MoneyIcon} width="20" height="20" />
        Сокетом материнской платы называется разъём для центрального процессора.
        Если сокет процессора не будет соответствовать сокету материнской платы,
        вы физически не сможете подключить эти комплектующие. У нескольких
        поколений процессоров сокеты могут совпадать.
      </p>

      <h2 className="contentParagraph" id="motherboardCompatibility">
        Совместимость процессора и BIOS платы
      </h2>
      <p>
        <img src={MoneyIcon} width="20" height="20" />В случае, если выбранная
        вами материнская плата была выпущена до появления на рынке выбранного
        процессора, они не будут совместимы со старта.
      </p>
      <p>
        Ревизия процессора характеризуется степпингом. Для того чтобы
        совместимость появилась, потребуется обновить ПО BIOS вашей материнской
        платы. Сделать это можно несколькими способами:
      </p>
      <p>
        1. Приобрести материнскую плату новой партии выпуска (с новой,
        поддерживаемой версией BIOS). Данный способ очень редко жизнеспособен,
        поскольку никакая компания-производитель плат помимо ASRock не указывает
        версию BIOS на плате или в её характеристиках.
      </p>
      <p>
        У ASRock версия BIOS указывается на микросхеме самого BIOS.
        Выглядит это следующим образом:
      </p>
      <p>
        <img src={Photo2} className="motherboardPhoto2" />
      </p>
      <p>
        2. Использовать функцию BIOS FlashBack для обновления BIOS. Однако эта
        функция поддерживается не всеми материнскими платами. Чтобы совершить
        обновление этим способ безопасно – следуйте инструкции производителя
        материнской платы.
      </p>
      <p>
        3. Использовать специальное устройство для прошивки – программатор. Этот
        способ подойдёт вам в случае отсутствия опции FlashBack, но требует
        определённый навык.
      </p>
      <p>
        4. Запустить ПК на поддерживаемом материнской платой процессоре,
        обновить BIOS и поменять процессор на желаемый.
      </p>
      <h2 className="contentParagraph" id="motherboardChipset">
        Чипсет материнской платы
      </h2>
      <p>
        <img src={MoneyIcon} width="20" height="20" />
        Чипсет материнской платы обычно записывается производителями в
        цифро-буквенном виде в названии продукта. Для покупателя основных
        отличия различных чипсетов три:
      </p>
      <p>
        1. Количество разъёмов материнской платы.
      </p>
      <p>
        2. Возможность поддержки SLI/Crossfire режимов работы видеокарт.
      </p>
      <p>
        3. Возможность разгона процессора и/или оперативной памяти.
      </p>

      <div className="extraInformation">
        <p className="extraInformationHeader">
          Чипсет
        </p>
        <p>
          <img src={PhysicsIcon} width="20" height="20" />
          Чипсет - набор микросхем, который организует работу компонентов системы
          (от USB портов до процессора или видеокарты).
        </p>
      </div>

      <p>
        Важно понимать, что чипсет платы не гарантирует любую из
        вышеперечисленных характеристик, а лишь влияет на возможность
        производителя добавить её.
      </p>
      <p>
        Поэтому если вы хотите приобрести плату с пониманием различий чипсетов,
        для гарантии успешной покупки Вы всегда должны проверять на наличие
        поддержки той или иной функции в спецификации платы.
      </p>

      <h3 className="contentParagraphTopics">Поддержка SLI/Crossfire</h3>
      <p>
        Функции SLI и Crossfire нужны для полноценной работы в паре видеокарт.
        На текущий момент на рынке существуют платы с разными режимами работы
        этих функций. Встречаются режимы x8x8, когда на каждую из видеокарт
        выделяется по 8 линий PCI-Express.
      </p>
      <p>
        Также вы можете найти режим x16x16, где таких линий на каждую карту уже
        по 16. Однако для современных видеокарт большого отличия между режимами
        в производительности нет.
      </p>
      <p>
        Существует также режим x16x4, однако этот режим уже сильно ограничивает
        производительность одной из карт, и покупать несколько карт для этого
        режима крайне сомнительно с экономической точки зрения.
      </p>
      <p>
        Если Вы нацелены на использование одного из этих режимов, учтите, что во
        время использования этих технологий Вы можете наблюдать
        графические ошибки во время работы.
      </p>
      <p>
        Из-за этого мы рекомендуем Вам смотреть в сети тесты вашей
        связки видеокарт и технологии для Ваших задач.
      </p>

      <div className="extraInformation">
        <p className="extraInformationHeader">
          С чем это связано
        </p>
        <p>
          <img src={PhysicsIcon} width="20" height="20" />
          Это связано с объёмом передаваемой по различному количеству PCI-линий
          видеокартой информации.
        </p>
      </div>

      <p>
        Видеокарты, подключённые по SLI, также должны быть соединены специальным
        мостом SLI. Выглядит он следующим образом:
      </p>
      <p>
        <img src={Photo3} className="motherboardPhoto3" />
      </p>
      <p>Для подключения видеокарт с помощью Crossfire такой мост не нужен.</p>

      <h3 className="contentParagraphTopics">
        Поддержка разгона процессора/оперативной памяти
      </h3>
      <p>
        Поддержка разгона выражается в значениях частот, которые может достигать
        оперативная память. Её наличие поддержки позволяет изменять частоту и
        тайминги памяти вручную.
      </p>
      <p>
        В противном случае Вы сможете редактировать только тайминги.
      </p>
      <p>
        Даже если Вы не рассматриваете возможность разгона, Вы должны знать, что
        платы такой поддержки имеют строгое ограничение по максимальной частоте
        оперативной памяти.
      </p>

      <p>
        Эти ограничения также прописаны в характеристиках материнских плат.
      </p>
      <p>
        Наличие поддержки разгона процессора обычно не указывается
        производителями. Поэтому найти информацию об этом Вы можете на сайте
        производителя чипсета, указанном в технических характеристиках
        платы.
      </p>

      <h3 className="contentParagraph" id="motherboardVRM">
        VRM материнской платы
      </h3>
      <p>
        <img src={MoneyIcon} width="20" height="20" />
        При выборе материнской платы стоит учитывать характеристики питания VRM.
        Сами производители их почти нигде не указывают. Однако в сети существуют
        таблицы, в которых достаточно подробно указываются данные для выбора платы.
      </p>
      <p>
        Обращать внимание стоит на: производителя контроллера ШИМ (PWM
        controller), производителя даблеров, распределение каналов и способ
        организации.
      </p>
      <p>Таким образом эти характеристики могут выглядеть в таблице:</p>
      <p>
        <img src={Photo4} className="motherboardPhoto4" />
      </p>

      <p>
        Лучшие производители контроллеров, ШИМ и даблеров: Infenion, Intersil.
        Более бюджетный - uPI Semi.
      </p>
      <p>
        Для материнских плат, подбираемых не под разгон комплектующих достаточно
        4 распараллеленных или даблерных процессорных фаз.
      </p>
      <p>
        При разгоне вам понадобится 7-8 распараллеленных или простых фаз, или
        5-6 даблерных фаз.
      </p>

      <h2 className="contentParagraph" id="motherboardPowerSystemCooling">
        Охлаждение системы питания
      </h2>
      <p>
        <img src={MoneyIcon} width="20" height="20" />
        Важно помнить об охлаждении цепей VRM. Такое охлаждение представлено
        радиаторами в соответствующих областях – слева и/или сверху от сокета.
      </p>
      <p>
        <img src={Photo5} className="motherboardPhoto5" />
      </p>
      <p>
        Оценить максимальную температуру на цепях питания достаточно просто –
        найдите в сети соответствующие тесты или тепловизионные снимки.
      </p>
      <p>
        Предел по температурам, выходя за который
        характеристики цепей питания будут падать – 75-80 градусов. Выбирайте
        платы, не выходящие за этот промежуток.
      </p>


      <h2 className="contentParagraph" id="motherboardQVLCanalsTopology">
        QVL список, каналы и топология материнской платы
      </h2>
      <p>
        <img src={MoneyIcon} width="20" height="20" />
        Наличие оперативной памяти в списке QVL, количество каналов и топология
        платы в разных степенях влияют на работоспособность оперативной памяти.
      </p>
      <p>
        В процессе производства материнской платы производители тестируют
        различные модули оперативной памяти на определённых частотах.
      </p>
      <p>
        Результаты тестов (будет память работать при определённых параметрах на
        этой плате или нет) производители выкладывают на сайтах со своей
        продукцией, обычно в отдельный раздел QVL.
      </p>
      <p>
        В QVL списках указывается ранг памяти в формате 1Rx8 (первый ранг,
        8 чипов памяти) / 2Rx16 (второй ранг, 16 чипов памяти) или SS / DS
        (single side/double side).
      </p>

      <div className="extraInformation">
        <p className="extraInformationHeader">
          Второй случай
        </p>
        <p>
          <img src={PhysicsIcon} width="20" height="20" />
          Во втором случае указывают по сути количество сторон, на которых
          расположены чипы памяти.
        </p>
      </div>

      <p>
        QVL список можно найти на сайтах с самой оперативной памятью.
        Однако если рассматриваемого вами модуля в QVL списке платы нет, это не
        значит, что он не будет работать, просто производитель этого не
        гарантирует.
      </p>
      <p>
        Также, редко, но были прецеденты, когда протестированная память на
        заявленной частоте не работала, следовательно, 100%-ной точности у таких
        списков быть не может.
      </p>
      <p>
        Ещё стоит помнить о том, что разные версии ПО BIOS могут влиять как на
        разгон, так и на совместимость.
      </p>
      <p>
        Некоторые платы имеют несколько списков QVL под разные поколения
        процессоров. Обязательно проверяйте соответствие вашего процессора
        списку QVL!
      </p>
      <br />
      <p>
        Количество каналов и топология материнской платы – крайне важные факторы
        влияния на оперативную память.
      </p>
      <p>
        В соответствии со спецификацией, Вы должны будете установить память на
        плату определённым образом. Важно понимать, что количество каналов
        определяется количеством парных разъёмов под оперативную память
      </p>
      <p>
        Большее количество задействованных каналов всегда означает большую
        производительность.
      </p>

      <div className="extraInformation">
        <p className="extraInformationHeader">
          Топология и кол-во каналов
        </p>
        <p>
          <img src={PhysicsIcon} width="20" height="20" />
          На то, как установить модули памяти для максимального быстродействия
          (задействования максимального количества каналов) влияют топология и
          количество каналов.
        </p>
      </div>

      <p>
        Существует три вида топологии у материнских плат – Цепь Дейзи (Daisy
        Chain), Т-топология (T Topology) и топология для двух разъёмов.
      </p>
      <p>
        Память, подключённая к разъёмам с топологией Дейзи, лучше работает
        (лучше разгоняется и более вероятно запускаются заявленные
        производителем частоты), если у каждого канала задействовано по одному
        разъёму.
      </p>
      <p>
        У плат с Т-топологией лучшая производительность достигается при
        подключении всех разъёмов.
      </p>
      <p>
        Когда разъёмов для оперативной памяти на плате только два – модули
        разгоняются лучше и более вероятно совместимы чем на платах с другой
        топологией.
      </p>
      <p>
        Определить вид топологии платы можно с помощью QVL списка. Если
        память с максимальной частотой тестировалась в 4-ёх модульном

        исполнении, то плата скорее всего имеет Т-топологию, а если в 2-ух
        модульном, то Цепь Дейзи, если количество разъёмов на плате превышает 2.
      </p>
      <br />
      <p>
        Очень важно понимать, что топология оказывает влияние на
        работоспособность оперативной памяти только при частотах свыше 3800 MHZ.
      </p>
      <div className="extraInformation">
        <p className="extraInformationHeader">
          Схема различия топологий
        </p>
        <p>
          <img src={PhysicsIcon} width="20" height="20" />
          На данной схеме Вы можете увидеть принципиальное различие топологий:
        </p>
        <p>
          <img src={Photo6} className="motherboardPhoto6" />
        </p>
        <p>А это – схема подключения каналов к процессору (при Т-топологии):</p>
        <p>
          <img src={Photo7} className="motherboardPhoto7" />
        </p>
      </div>

      <p>
        Помимо материнской платы, память зависит от контроллера памяти процессора.
      </p>
      <p>
        В характеристиках процессора указывается максимальная поддерживаемая
        частота памяти, однако у производителей AMD максимальная частота, на
        которой память действительно могла работать нормально в среднем была
        меньше на 2%.
      </p>
      <p>Владельцы процессоров Intel ограничены лишь материнской платой.</p>

      <h2 className="contentParagraph" id="motherboardPowerSupply">
        <img src={PhysicsIcon} width="20" height="20" />Питание материнской платы
      </h2>

      <p>
        Современные блоки питания в связи особенностями их наполнения сами по
        себе не способны отвечать электрическим требованиям процессора (низкое
        напряжение при высокой силе тока). В связи с этим на материнских платах
        устанавливаются VRM (модуль регуляции напряжения) преобразователи тока.
      </p>
      <p>
        Такие модули используют импульсные преобразователи напряжения. Смысл их
        работы заключается в том, чтобы распределить подачи тока высокого
        напряжения за единицу времени на части. Результат работы импульсного
        преобразователя – очень короткая подача тока высокого напряжения,
        которая приводит к тому, что за одну и ту же единицу времени подаётся
        меньшее напряжение.
      </p>
      <p>
        Насколько коротка должна быть подача тока определяется имеющимся и
        требуемым напряжением. Например, чтобы подать за 1 секунду 3 вольта
        вместо 10, в течении 3/10 секунды преобразователь будет подавать ток.
      </p>
      <p>
        Однако только с помощью преобразователя процессор работать не может,
        ведь ток всегда будет прерывист и данные будут теряться. Для решения
        этой проблемы применяется LC-фильтр, состоящий из индуктивности и
        ёмкости.
      </p>
      <p>
        Индуктивность на материнской плате представлена дросселями, а ёмкость –
        конденсаторами. Выглядят они следующим образом:
      </p>
      <p>
        <img src={Photo8} className="motherboardPhoto8" />
      </p>
      <p>
        Функция LC-фильтра – снижение или поднятие уровня напряжения в текущий
        момент времени до желаемого.
      </p>
      <p>
        По включению компьютера логика контроллера (в остальное время питаемого
        батареей материнской платы) активируется и контроллер начинает работу.
        Он подаёт на связь драйвера и мосфета сигнал определённой частоты.
      </p>
      <p>
        Драйвер и мосфет в этом случае – ключевые элементы импульсного
        преобразователя, которые и выполняют функцию таймера. Они
        принимают в себя ток от блока питания и сохраняют частоту, заданную
        контроллером, однако сила и мощность тока возрастает.
      </p>
      <p>
        После прохождения мосфета, сигнал встречает "сглажвающий" его LC-фильтр, а завершает путь заряда сам процессор.
      </p>
      <p>
        Цепочки из пар драйвер-мосфет и фильтров называют цепями питания. Если
        цепи имеют сдвиг по фазе относительно друг друга – импульс по ним
        проходит в разное время, то их называют фазами питания.
      </p>
      <p>Представить эту схему можно в следующем виде:</p>
      <p>
        <img src={Photo9} className="motherboardPhoto9" />
      </p>
      <h2 className="contentParagraphTopics">
        3 Вида схем питания материнских плат
      </h2>
      <p>
        Если подавать ток с напряжением в 10 Вольт и 250 Ампер на одну пару
        мосфет-драйвер, то она непременно не выдержит нагрузку и сгорит. Поэтому
        на материнских платах применяется в основном три вида организации
        питания процессора: прямая, даблерная, распараллеленная.
      </p>
      <p>
        Даблер – раздвоитель сигнала, уменьшающий частоту изначального сигнала
        контроллера вдвое у каждого из двух новых сигналов. Раздвоение сигнала
        позволяет подключить один канал контроллера к двум разным парам
        мосфет-драйвер и, следственно, сдвигает по фазе так же, как если бы
        мосфет-драйвер был подключён напрямую или парно.
      </p>
      <p>
        Однако уменьшенная вдвое частота вызывает негативный эффект – за одну и
        ту же единицу времени доступно меньше сдвигов по первоначальной фазе.
        Этот эффект компенсируется большей частотой сигналов контроллера.
      </p>

      <br />

      <p>
        Даблер, как и сдвиги по фазе цепей питания, требуется для уменьшения
        отклонения, возникающего в результате работы LC-фильтра.
      </p>

      <br />

      <p>
        <img src={Photo10} className="motherboardPhoto10" />
      </p>

      <br />

      <p>
        При прямом виде подключения количество каналов контроллера равно
        количеству фаз и цепей питания, а даблеры отсутствуют.
      </p>

      <br />

      <p>
        <img src={Photo11} className="motherboardPhoto11" />
      </p>

      <br />

      <p>
        При распараллеленном виде подключения количество каналов контроллера
        равно количеству фаз, даблеры отсутствуют, а количество цепей вдвое
        больше фаз и каналов.
      </p>

      <br />

      <p>
        <img src={Photo12} className="motherboardPhoto12" />
      </p>

      <br />

      <p>
        При даблерном виде подключения количество каналов контроллера равно
        количеству даблеров, а количество цепей и фаз вдвое больше каналов и
        даблеров.
      </p>

      <br />

      <p>
        <img src={Photo13} className="motherboardPhoto13" />
      </p>

      <br />

      <p>Все три схемы рядом друг с другом:</p>

      <br />

      <p>
        <img src={Photo14} className="motherboardPhoto14" />
      </p>

      <h2 className="contentParagraph" id="motherboardConnectors">
        Разъёмы
      </h2>
      <h3 className="contentParagraphTopics">M.2 SSD</h3>

      <p>
        <img src={MoneyIcon} width="20" height="20" />
        У M.2 накопителей есть два главных отличия: по ключу подключения и по
        размеру.
      </p>

      <p>
        Накопители формата M.2 имеют различные ключи подключения к материнской
        плате. Соответственно, ключ накопителя должен соответствовать входу на
        материнской плате.
      </p>

      <ul className="listWithM2SizesAndTypes">
        <li></li>
        <li></li>
      </ul>

      <p>
        <img src={Photo15} className="motherboardPhoto15" />
      </p>

      <p>
        Так выглядит место для накопителя с ключом M или B и M одновременно:
      </p>

      <p>
        <img src={Photo16} className="motherboardPhoto16" />
      </p>

      <p>
        Вы не сможете подключить накопитель только с ключом M в вход ключа B.
        Если на накопителе два ключа, то, в зависимости от производителя, он
        может поддерживаться платой с ключом M.
      </p>
      <p>
        Уточнить это Вы можете в технических характеристиках – если в параметрах
        разъёма будет указана шина SATA, то накопитель ключа B совместим.
      </p>

      <br />

      <p>
        Если Вы имеете накопитель ключа M, то будет лучше, если Вы приобретёте
        плату с радиаторами и на M.2 накопители, так как именно такие SSD
        греются больше всего.
      </p>
      <p>
        Также Вы должны учесть максимальную возможную длину подключаемых
        накопителей, информацию о которой Вы можете найти в спецификации
        выбранной платы.
      </p>

      <h3 className="contentParagraphTopics">SATA разъёмы</h3>
      <p>
        Зачастую M.2 накопители делят с разъёмами SATA одну и ту же шину,
        вследствие чего некоторые порты SATA могут отключаться при
        задействованном M.2 разъёме.
      </p>
      <p>
        О том, какие конкретно порты не будут работать написано в спецификации
        материнской платы в соответствующем разделе.
      </p>

      <h3 className="contentParagraphTopics">USB разъёмы</h3>
      <p>
        Для того, чтобы все USB порты на передней или верхней панелях вашего
        корпуса работали – им должен соответствовать разъём на материнской плате.
      </p>
      <p>
        Учитывайте также, что разъём USB 2.0 на материнской плате может
        использоваться для питания SD Card ридеров и помп водяного охлаждения.
        Фото этих разъёмов с количеством питаемых ими портов USB:
      </p>
      <p>
        <img src={Photo17} className="motherboardPhoto17" />
      </p>

      <h3 className="contentParagraphTopics">Вентиляторные разъёмы</h3>
      <p>
        Каждому из корпусных, радиаторных вентиляторов должен соответствовать
        один разъём, название которого оканчивается на _FAN, _OPT, _PUMP,
        _PUMP+. Эти разъёмы выглядят так:
      </p>
      <p>
        <img src={Photo18} className="motherboardPhoto18" />
      </p>

      <h3 className="contentParagraphTopics">Разъёмы подсветки</h3>
      <p>
        Разъёмы подключения подсветки не взаимозаменяемы. Подключая устройство,
        расчитанное на 5 Вольт к 12 Вольтовому коннектору Вы скорее всего
        лишитесь или того, или другого. Представлены эти разъёмы в основном в
        трёх видах.
      </p>
      <p>1 и 2 вид:</p>
      <p>
        <img src={Photo19} className="motherboardPhoto19" />
      </p>
      <p>3 вид:</p>
      <p>
        <img src={Photo20} className="motherboardPhoto20" />
      </p>

      <h2 className="contentParagraph" id="motherboardExtraInformation">
        Дополнительные сведения
      </h2>
      <p>
        <img src={MoneyIcon} width="20" height="20" />
        На некоторых материнских платах устанавливаются несколько микросхем
        BIOS, для того чтобы в экстренной ситуации Вы смогли запустить ПК, не прибегая к помощи сервисных центров.
      </p>
      <p>
        На платах иногда устанавливается экран пост-кода, который бывает полезен
        в случае любой ненормальной работы ПК.
      </p>
      <p>
        Этот экран сообщит вам о том, с чем возникла проблема в системе с
        помощью кода, расшифровать который Вы сможете с помощью спецификации
        платы.
      </p>
      <p>
        Об остальных функциях материнской платы
        производители всегда пишут в технических характеристиках.
      </p>

      <h2 className="contentParagraph" id="motherboardSelectionAlgorithm">
        Алгоритм выбора материнской платы
      </h2>
      <p>
        1. Выберите процессор. Его сокет должен совпадать с
        сокетом материнской платы.
      </p>
      <h3 className="contentParagraphTopics">
        Если Вы не имеете возможности в любом случае обновить BIOS платы:
      </h3>
      <p>
        Дату выхода процессора с выбранным степпингом, которую Вы найдёте введя в любую поисковую
        строку код производителя или номер партии (располагаются на странице в интернет-магазине), Вы должны сравнить с датой выхода материнской платы.
      </p>
      <p>
        В случае, если процессор вашего степпинга появился раньше материнской платы – учтите это и подготовьтесь в соответствии с
        написанным в главе про совместимость процессора и BIOS платы.
      </p>
      <p>
        В противном случае, Вы рискуете получить неработающий с момента сборки
        ПК.
      </p>

      <br />

      <p>
        2. Выберете чипсет платы в соответствии с пожеланиями (разгон,
        количество различных разъёмов, SLI/Crossfire).
      </p>
      <p>
        3. Оцените элементную базу VRM понравившихся плат в соответствии с
        пожеланиями (разгон, отсутствие разгона). Отсеивайте по температуре
        платы, VRM которых в тестах нагревается выше 75-80 градусов.
      </p>
      <p>
        4. Учтите все разъёмные нюансы. Также убедитесь, что выбранный вам
        корпус поддерживает форм-фактор платы.
      </p>
      <p>
        5. Удостоверьтесь, что каждому из ваших устройств (монитору, наушникам,
        микрофону, клавиатуре/мышке, портам USB, CD-ROM, Card ридеру и т.д)
        соответствует разъём на материнской плате. Если же каких-то разъёмов не
        хватает, проверьте, не существует ли переходников на большее количество
        входов, прежде чем отсеивать плату.
        <br />
        Проверьте, удовлетворит ли вас максимальная пропускная способность
        интернет подключения платы.
        <br />
        Проверьте с помощью отзывов качество звуковой карты материнской платы.
      </p>
      <p>
        6. Если Вы собираетесь разгонять комплектующие, постарайтесь найти в
        сети тест вашего конкретного набора с выбранной платой для того, чтобы
        Вы понимали, на что рассчитывать.
      </p>
    </div>
  );
};

export default Motherboard;
