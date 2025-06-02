# Компонент Tag

Универсальный компонент для отображения кликабельных/некликабельных тэгов.

## Props

| Пропс         | Тип                  | По умолчанию | Описание                        |
| ------------- | -------------------- | ------------ | ------------------------------- |
| `title`       | `string`             | -            | Текст для отображения           |
| `className`   | `string`             | `''`         | Дополнительные CSS-классы       |
| `isClickable` | `boolean`            | `false`      | Делает таб кликабельным         |
| `onClick`     | `(value: T) => void` | -            | Обработчик клика                |
| `value`       | `T`                  | -            | Значение для передачи в onClick |
| `hasIcon`     | `boolean`            | -            | Нужна ли иконка                 |
| `icon`        | `ReactNode`          | -            | Компонент иконки                |

## Примеры использования

### Простой некликабельный тэг

```jsx
<Tab title="Hi" className="bg-white px-3 py-[6px] w-fit rounded-[29px]" />
```

### Кликабельный тэг с объектом

```jsx
<Tab<{value: string, id: number}>
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
<Tab<number>
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
| `tabClassName`    | `string`       | `''`         | Дополнительные CSS-классы для табов           |
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
        tabClassName="bg-white px-3 py-[6px] w-fit rounded-[29px]"
      >
        {tagsForRender.map((tag) => (
          <Tag title={tag} />
        ))}
      </Tags>
    );

    ```
````

### Пример компонента тэгов с тултипом

При необходимости использования тултипа пропс hasExpandedButton должен быть false, чтобы была возможность кастомизировать рендер кнопки и добавить собственные стили (сделано,Чтобы не перегружать универсальный компонент)

````jsx
<div className="w-fit flex gap-2">
        <Tags
          tabClassName="bg-white px-3 py-[6px] rounded-[29px]"
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
      ```
````
