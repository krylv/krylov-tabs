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

### Тэг с числовым значением

```jsx
<Tab<number>
  title="Цифра"
  value={42}
  isClickable
  onClick={(num) => console.log(num)}
/>
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
