import React from 'react';
import MoneyIcon from "../../Icons/MoneyIcon.svg";
import PhysicsIcon from "../../Icons/PhysicsIcon.svg"

const DefaultPage = () => {
  return (
    <div  className="PageContainer">
      <h1 className="sloganAndAccesoireName">PC Enjoyer. Поможем вам собрать пк и не только!</h1>

      <p>Ниже вы можете ознакомиться со списком задач, для решения которых используется наш сайт:</p>

      <div className="listStyle">
        <li>
          <p>Данный сайт создан с целью представления информации о параметрах всех комплектующих ПК в доступном виде не только для людей с поверхностными познаниями в устройстве компьютера, но и для продвинутых пользователей.</p>
        </li>
        <li>
          <p>Сайт станет Вашим верным помощником в выборе составляющих Вашего ПК под выбранные задачи. В статьях указана приоритетность характеристик комплектующих в зависимости от целей пользования компьютером.</p>
        </li>
        <li>
          <p>Наши статьи позволяют углубится и в теоретическую часть работы ПК, их изучение откроет Вам взгляд на устройство компьютера.</p>
        </li>
        <li>
          <p>Во вкладке “Обновления” Вы всегда можете отслеживать изменения и улучшения сайта, как крупные, так и мелкие.</p>
        </li>
        <li>
          <p>Во вкладке “Комплектующие” собраны статьи обо всех составляющих ПК. Расположение статей соответствует порядку/приоритетности подбора комплектующих.</p>
        </li>
      </div>

      <p>Условниые обозначения:</p>
      <div className="listStyle">
        <li>
          <p><img src={MoneyIcon} width="20" height="20"/> — Обозначение абзацев/частей статьи, описывающие потребительские качества того или иного составляющего ПК.</p>
        </li>
        <li>
          <p><img src={PhysicsIcon} width="20" height="20"/> — Дополнительная информация, дополнительные свойства комплектующих или же рассмотрение физических процессов, протекающих во время работы комплектующего.</p>
        </li>
      </div>
    </div>
  );
};

export default DefaultPage;