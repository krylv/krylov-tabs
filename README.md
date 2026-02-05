# Компонент Tag

Универсальный компонент для отображения кликабельных/некликабельных тэгов.
В тэг можно передать дженерик с необходимым значением тэга

```jsx
<Tag<{id:number,value:string}>>
```

## Установка

Эта библиотека требует следующие зависимости, которые должны быть установлены в вашем проекте:

- `react` (^18.0.0)
- `react-dom` (^18.0.0)
- `typescript` (>=4.0.0) — если используете TypeScript
- `framer-motion` (~5.8.3) - для анимаций

Для установки используйте:

```bash
npm i --registry https://npm.aerokod.ru @aerokod/aerokod-tags #Может потребоваться --legacy-peer-deps
```

## Примеры использования

### Простой некликабельный тэг

```jsx
<Tag title="Hi" className="bg-white px-3 py-[6px] w-fit rounded-[29px]" />
```

### Кликабельный тэг с объектом

```jsx
<Tag<{value: string, id: number}>
  title="Уютный район"
  className="bg-white px-3 py-[6px] w-fit rounded-[29px]"
  value={{ id: 1, value: "sdwd" }}
  isClickable={true}
  onClick={(data) => console.log(data)}
/>
```

### Тэг с иконкой

Важное уточнение: лучше использовать svgr, чтобы вставлять иконки. С нативным тэгом img тяжело работать, потому что не меняется цвет, не меняется обводка.

```jsx
<Tag
  title="Акции"
  className="bg-black text-white flex items-center gap-2 px-3 py-[6px] w-fit rounded-[29px]"
  hasIcon
  icon={<img className="size-[13px] " src="assets/svg/Discount.svg" />}
/>
```

### Тэг с числовым значением

```jsx
<Tag<number>
  title="Цифра"
  value={42}
  isClickable
  onClick={(num) => console.log(num)}
/>
```

### Тэг с активностью

```jsx
const [isActive, setIsActive] = useState(false);

return (
  <Tag
    title="Уютный район"
    className="bg-white px-3 py-[6px] w-fit rounded-[29px] "
    isClickable
    value={{ id: 1, label: "test" }}
    isActive={isActive}
    activeClassName="!bg-red-500"
    onClick={() => setIsActive(!isActive)}
  />
);
```

# Компонент Tags

Универсальный компонент для отображения тэгов

## Props

| Пропс             | Тип            | По умолчанию | Описание                                      |
| ----------------- | -------------- | ------------ | --------------------------------------------- |
| `children`        | `ReactNode`    | -            | Добавление тэгов в обёртку                    |
| `className`       | `string`       | `''`         | Дополнительные CSS-классы                     |
| `tagClassName`    | `string`       | `''`         | Дополнительные CSS-классы для табов           |
| `buttonClassName` | `string`       | `''`         | Дополнительные CSS-классы для кнопки действия |
| `hasExpandButton` | `boolean`      | -            | Нужно ли отображать кнопку для тэгов          |
| `onExpand`        | `VoidFunction` | -            | Целовое действие при нажатии на кнопку        |
| `OnHover`         | `VoidFunction` | -            | Целевое действие при наведении на кнопку      |
| `expandedLabel`   | `string`       | -            | Текст в кнопке                                |

## Примеры использования

### Пример компонента тэгов с раскрытием

````jsx
  const [isCollapsed, setIsCollapsed] = useState(true);
    const maxTagsLength = 1;
    const tags = ["test1", "test2", "test3"];
    const tagsForRender = isCollapsed ? tags.slice(0, maxTagsLength) : tags;
    const hiddenTagsLength = tags.length - tagsForRender.length;
    return (
      <Tags
        expandedLabel={`+${hiddenTagsLength}`}
        onExpand={() => setIsCollapsed(!isCollapsed)}
        buttonClassName={`bg-white px-[8.5px] py-[5px] rounded-full font-bold ${
          hiddenTagsLength === 0 && "hidden"
        }`}
        className="flex gap-2"
        hasExpandButton
        tagClassName="bg-white px-3 py-[6px] w-fit rounded-[29px]"
      >
        {tagsForRender.map((tag) => (
          <Tag title={tag} />
        ))}
      </Tags>
    );

    ```
````

### Пример компонента тэгов с тултипом

При необходимости использования тултипа пропс hasExpandedButton должен быть false, чтобы была возможность кастомизировать рендер кнопки и добавить собственные стили (сделано,чтобы не перегружать универсальный компонент)

```jsx
const [isTooltipVisible, setIsTooltipVisible] = useState(false);
const maxLength = 3;
const tags = ["test1", "test2", "test3", "test4", "test5"];
const tagsForView = tags.slice(0, maxLength);
const tagsForTooltip = tags.slice(maxLength);
const hiddenTagsLength = tags.length - maxLength;

return (
  <div className="w-fit flex gap-2">
    <Tags
      tagClassName="bg-white px-3 py-[6px] rounded-[29px]"
      className="flex gap-2 w-fit"
      expandedLabel={`+${hiddenTagsLength}`}
      onMouseEnter={() => setIsTooltipVisible(true)}
      onMouseLeave={() => setIsTooltipVisible(false)}
    >
      {tagsForView.map((tag, index) => (
        <Tag key={index} title={tag} />
      ))}
    </Tags>
    <div className="relative">
      <button
        onMouseEnter={() => setIsTooltipVisible(true)}
        onMouseLeave={() => setIsTooltipVisible(false)}
        className="bg-white px-[8.5px] py-[5px] rounded-[29px] font-bold"
      >{`+${hiddenTagsLength}`}</button>
      {isTooltipVisible && (
        <motion.div
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 5 }}
          className="absolute left-0 top-full mt-1 bg-white p-3 rounded shadow-lg z-10"
        >
          {tagsForTooltip.map((tag, index) => (
            <p key={index}>{tag}</p>
          ))}
        </motion.div>
      )}
    </div>
  </div>
);
```

## Пример использования готовых компачей

### Пример компонента тэгов с тултипом

| Пропс                    | Тип              | По умолчанию | Описание                                              |
| ------------------------ | ---------------- | ------------ | ----------------------------------------------------- |
| `maxLength`              | `number`         | -            | Максимальная длинна тэгов до кнопки                   |
| `tags`                   | `T`              | `''`         | Массив тэгов                                          |
| `tagsClassName`          | `string`         | `''`         | Стилизация самих тэгов                                |
| `containerClassName`     | `string`         | `''`         | Стилизация контейнера (там тэги и кнопка)             |
| `tagsContainerClassName` | `string`         | -            | Стилизация контейнера с самими тэгами (без кнопки)    |
| `tooltipClassName`       | `string`         | -            | Стилизация тултипа                                    |
| `buttonClassName`        | `string`         | -            | Стилизация кнопки                                     |
| `tagInTooltipClassName`  | `string`         | -            | Стилизация тэгов в тултипе                            |
| `getTagTitle`            | `(tag:T):string` | -            | Устанавливает выбранное поле в качестве имени тэга    |
| `getTagId`               | `(tag:T):number` | -            | Устанавливает поле в качестве id (в основном для key) |

![Пример компонента](https://github.com/krylv/krylov-tabs/blob/14038b0b1227038b299e8ae1e011a872a34da8eb/assets/png/Tooltip.png?raw=true)

````jsx
const tags = [
      {title:"Квартира с ремонтом",id:1,value:'white'},
      {title:"Квартира с ремонтом",id:1,value:'black'},
      {title:"Квартира с ремонтом",id:1,value:'e_girl'},

    ]; //Массив тэгс может быть любым, добавлен дженерик
    return (
      <TooltipTags
        maxLength={2}
        tags={tags}
        tagsClassName="bg-white px-[10px] py-[5px] rounded-[15px]"
        containerClassName="w-fit flex gap-2"
        getTagTitle={(tag) => tag.title}
        getTagId={(tag) => tag.id}
        tagsContainerClassName="gap-2"
        tooltipClassName="absolute right-0 top-0 translate-y-[40px] px-[10px] py-[5px] rounded-[20px] bg-white"
        buttonClassName="bg-white px-[5px] rounded-full"
        tagInTooltipClassName="text-nowrap"
      />
    )```

````

### Пример компонента SwiperTags

| Пропс                  | Тип                 | По умолчанию | Описание                                              |
| ---------------------- | --------------------| ------------ | ----------------------------------------------------- |
| `maxLength`            | `number`            | -            | Максимальная длинна тэгов до кнопки                   |
| `tags`                 | `T`                 | `''`         | Массив тэгов                                          |
| `gap`                  | `number`            | `''`         | Отступ между тэгами                                   |
| `swiperClassName`      | `string`            | `''`         | Стилизация контейнера тэгов                           |
| `swiperSlideClassName` | `string`            | -            | Стилизация самих тэгов                                |
| `buttonClassName`      | `string`            | -            | Стилизация кнопки                                     |
| `getTagId`             | `(tag:T):number`    | -            | Устанавливает поле в качестве id (в основном для key) |
| `children`             | `(tag:T):ReactNode` | -            | Прокидываем тэг                                        |


![Пример компонента](https://github.com/krylv/krylov-tabs/blob/ec9ab7ed38428b0cc6f7751b3d95c81e71ffc15a/assets/png/Swiper.png?raw=true)

````jsx
const tags = [
      {title:"Квартира с ремонтом",id:1,value:'white'},
      {title:"Квартира с ремонтом",id:1,value:'black'},
      {title:"Квартира с ремонтом",id:1,value:'e_girl'},

    ]; //Массив тэгс может быть любым, добавлен дженерик
    return (
     <SwiperTags
          swiperClassName="!overflow-visible"
          swiperSlideClassName="!w-fit"
          buttonClassName="bg-white p-2 rounded-full"
          wrapperClassName="flex items-center"
          tags={tags}
          maxLength={2}
          getTagId={(tag) => tag.id}
          gap={15}
        >
          {(tag) => (
            <div>{tag.title}</div>
          )}
        </SwiperTags>
    )```

````

### Пример компонента RowTags

| Пропс                | Тип               | По умолчанию | Описание                                              |
| -------------------- | ----------------- | ------------ | ----------------------------------------------------- |
| `tags`               | `T`               | `''`         | Массив тэгов                                          |
| `containerClassName` | `string`          | `''`         | Стилизация контейнера тэгов                           |
| `children`           | `(tag:T) => void` | -            | Стилизация самих тэгов                                |
| `isClickable`        | `boolean`         | false        | Указывает кликабелен ли тэг                           |

![Пример компонента](https://github.com/krylv/krylov-tabs/blob/ec9ab7ed38428b0cc6f7751b3d95c81e71ffc15a/assets/png/Row.png?raw=true)

````jsx
 <div className="w-full">
     <RowTags isClickable tags={tags} containerClassName="flex text-nowrap gap-3" >
      {(tag) => <div key={tag.id}>
        {tag.name}</div>}
     </RowTags>
    </div>

````
