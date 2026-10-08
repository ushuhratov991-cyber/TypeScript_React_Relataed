Materials:
Ссылка на мой репозиторий с нашим React+TS проектом:
https://github.com/gzavertyaev-dev/cohort_83_react_ts
Homework:
Создать приложение Employees:
1. Приложение должно иметь 2 страницы: "Create Employee" и "Employees".
2. Создайте Layout, который будет включать Header и Main часть
3. В Header должны быть 2 ссылки "Create Employee", "Employees"
4. При клике на ссылку "Create Employee", должна появляться в Main части
страница "Create Employee", а при клике на "Employees", должна появляться в Main
части страница "Employees"
5. Страница "Create Employee" должна включать в себя "Create Employee" форму
6. Элементы управления формой "Create Employee":
"Name\*":
- компонент Input;
- обязательное поле;
- тип данных: string;
- минимальное количество символов - 2;
- максимальное количество символов - 50;
"Surname\*":
- компонент Input;
- обязательное поле;
- тип данных: string;
- максимальное количество символов - 15;
"Age\*":
- компонент Input;
- обязательное поле;
- тип данных: string;
- минимальное количество символов - 1;
- максимальное количество символов - 3;
"Job Position":
- компонент Input;
- опциональное поле;
- максимальное количество символов - 30;
Кнопка "Create":
- кнопка с типом submit. При клике на нее должна срабатывать валидация, если в
полях есть ошибки, то карточка на странице "Employees" не создается, а
валидационные ошибки должны быть показаны под полями.Если ошибок нет, то
карточка создается на странице "Employees", а данные для карточки кладите в
стейт при ее создании в виде объекта и затем эти данные из стейта отобразите в
карточке
7. Страница "Employees" должна содержать все карточки, которые создаются при
клике на кнопку "Create" в форме “Create Employee”
8. Подсказка: для работы с формой используйте библиотеки Formik, yup
9. Все данные карточек должны сохраняться в state, а затем данные из этого
стейте нужно положить в Context. Логика их удаления, получения и изменения
тоже должны контролироваться с помощью технологии Context



# Homework_14: как устроено приложение Employees

Это личный учебный конспект по реализации, которая находится в `src/homeworks/Homework_14`. Здесь разобраны порядок создания файлов, код и движение данных: от ввода в форму до появления и удаления карточки.

Файл лежит в скрытой папке `.study-notes.local`. Существующее правило `*.local` в `.gitignore` исключает эту папку из обычного добавления в Git. Для папки и файла установлены права доступа только для владельца. Это локальный конспект, а не файл приложения. Доступ из той же учётной записи компьютера эти меры не закрывают.

## 1. Что мы создаём

Приложение имеет две страницы:

- **Create Employee** — вводим данные сотрудника и нажимаем `Create`.
- **Employees** — смотрим все созданные карточки, удаляем одну или сразу все.

Общая шапка остаётся на месте. При переключении страниц меняется только содержимое основной области.

```text
┌─────────────────────────────────────────────────────┐
│ App Logo             Create Employee    Employees   │ ← Header
├─────────────────────────────────────────────────────┤
│                                                     │
│  Здесь показывается выбранная страница               │ ← Main
│                                                     │
│  либо форма, либо карточки                           │
│                                                     │
└─────────────────────────────────────────────────────┘
```

Редактирования сотрудника в этой работе нет. Есть создание, получение списка, удаление одной записи и удаление всех записей.

Мы берём внешний вид из вкладки Figma `Employee Redux`, но используем **Context**, как требует задание. Название вкладки Figma не определяет технологию приложения.

## 2. Какие технологии за что отвечают

| Технология | Задача в этой работе |
|---|---|
| React | Собирает экран из компонентов и обновляет его при изменении состояния |
| TypeScript | Проверяет форму данных и типы аргументов функций |
| `useState` | Хранит массив сотрудников |
| Context | Даёт форме и карточкам доступ к общим данным и функциям |
| React Router | Выбирает страницу по адресу и переключает страницы по ссылкам |
| Formik | Управляет значениями формы, отправкой, ошибками и очисткой |
| Yup | Описывает правила проверки полей |
| Emotion | Создаёт компоненты со стилями |
| `uuid` | Даёт каждому сотруднику отдельный идентификатор |

Новые библиотеки для этой домашней работы не устанавливались: они уже были в проекте.

## 3. Где какие файлы

```text
src/homeworks/Homework_14/
├── Task.md                         ← исходное задание
├── Homework_14.tsx                 ← состояние, Provider и маршруты
├── types.ts                        ← типы сотрудника и контекста
├── context.ts                      ← создание контекста
├── constants.ts                    ← адреса страниц
├── components/
│   ├── Layout/
│   │   ├── Layout.tsx              ← общая шапка и Main
│   │   ├── types.ts
│   │   └── styles.ts
│   ├── CreateEmployeeForm/
│   │   ├── CreateEmployeeForm.tsx   ← форма и Formik
│   │   ├── validation.ts           ← правила Yup
│   │   └── styles.ts
│   └── EmployeeCard/
│       ├── EmployeeCard.tsx        ← одна карточка
│       ├── types.ts
│       └── styles.ts
└── pages/
    ├── CreateEmployee/
    │   ├── CreateEmployee.tsx      ← страница с формой
    │   └── styles.ts
    └── Employees/
        ├── Employees.tsx           ← страница со списком
        └── styles.ts
```

Общие `Input` и `Button` используются из существующей папки `src/components`. Их не нужно заново создавать в домашке.

У этой домашней работы свой `Layout`. Старый `src/components/Layout/Layout.tsx` относится к другому экрану проекта и содержит другое меню и подвал. В задании Homework_14 нужны именно две ссылки и основная область.

## 4. Вложенность компонентов: кто внутри кого

```text
App
└── BrowserRouter
    ├── GlobalStyles
    └── Homework_14
        └── EmployeesContext.Provider
            └── Layout
                ├── Header
                │   └── две ссылки
                └── Main
                    └── Routes
                        ├── CreateEmployee
                        │   └── CreateEmployeeForm
                        │       ├── четыре Input
                        │       └── Button Create
                        └── Employees
                            ├── EmployeeCard для каждого сотрудника
                            │   └── Button Delete
                            └── Button Remove All Employees
```

Две ветки страниц нарисованы для понимания структуры. В обычном режиме `Routes` показывает одну подходящую страницу.

Обрати внимание: **Provider находится выше обеих страниц**. Поэтому они используют один и тот же список сотрудников.

## 5. Начинаем с типов: описываем данные

Файл: `src/homeworks/Homework_14/types.ts`.

```ts
export interface   {
  name: string;
  surname: string;
  age: string;
  jobPosition: string;
}

export interface Employee extends EmployeeFormValues {
  id: string;
}

export interface EmployeesContextData {
  employees: Employee[];
  createEmployee: (values: EmployeeFormValues) => void;
  deleteEmployee: (id: string) => void;
  deleteAllEmployees: () => void;
}

export enum EMPLOYEE_FORM_NAMES {
  NAME = "name",
  SURNAME = "surname",
  AGE = "age",
  JOB_POSITION = "jobPosition",
}
```

### `EmployeeFormValues`

Это описание данных, которые приходят из формы:

```ts
{
  name: "John",
  surname: "Johnson",
  age: "25",
  jobPosition: "QA",
}
```

Все четыре значения — строки. Возраст тоже строка: так сказано в задании, и поле ввода возвращает текст.

`interface` описывает форму объекта для TypeScript. Сам объект и память для него эта запись не создаёт.

### `Employee extends EmployeeFormValues`

`extends` здесь означает: у сотрудника есть все поля формы и ещё поле `id`.

После создания сотрудник выглядит так:

```ts
{
  id: "уникальный-идентификатор",
  name: "John",
  surname: "Johnson",
  age: "25",
  jobPosition: "QA",
}
```

### `EmployeesContextData`

Это договор о том, что компоненты смогут получить из контекста:

- массив `employees`;
- функцию `createEmployee`;
- функцию `deleteEmployee`;
- функцию `deleteAllEmployees`.

Разберём строку:

```ts
deleteEmployee: (id: string) => void;
```

Она означает: «В свойстве `deleteEmployee` лежит функция. При вызове ей нужно передать строку `id`. Используемого возвращаемого результата от неё не ожидается».

А эта строка:

```ts
deleteAllEmployees: () => void;
```

описывает функцию без аргументов. Для удаления всех сотрудников идентификатор отдельной карточки не нужен.

**Описание типа функции не является её выполнением.** Здесь ещё никто ничего не удаляет. Настоящие функции будут в `Homework_14.tsx`.

### `EMPLOYEE_FORM_NAMES`

Это именованные значения для атрибута `name` у полей. Например:

```ts
EMPLOYEE_FORM_NAMES.NAME // значение "name"
```

В проекте уже используется такой подход с `enum` для форм. Он помогает не писать одно и то же имя поля по-разному.

## 6. Описываем адреса страниц

Файл: `src/homeworks/Homework_14/constants.ts`.

```ts
export const EMPLOYEE_ROUTES = {
  CREATE_EMPLOYEE: "/",
  EMPLOYEES: "/employees",
};
```

Адрес `/` показывает форму. Адрес `/employees` показывает список.

Эти константы используются и в ссылках, и в маршрутах. Так ссылка ведёт на тот же адрес, который ожидает `Route`.

## 7. Создаём Context

Файл: `src/homeworks/Homework_14/context.ts`.

```ts
import { createContext } from "react";

import { type EmployeesContextData } from "./types";

export const EmployeesContext = createContext<EmployeesContextData>({
  employees: [],
  createEmployee: () => undefined,
  deleteEmployee: () => undefined,
  deleteAllEmployees: () => undefined,
});
```

`createContext<EmployeesContextData>(...)` создаёт контекст и задаёт тип его значения.

Переданный объект — **значение по умолчанию**. Оно будет прочитано компонентом, если над ним нет соответствующего Provider.

Функции `() => undefined` здесь — заглушки: они ничего не меняют. Внутри приложения Provider передаст настоящие функции вместо них.

Контекст не содержит отдельный второй массив сотрудников. Сам массив хранится в `useState`, а Provider делает текущее значение доступным вложенным компонентам.

Контекст лежит отдельно от файла компонента. Это соответствует правилу проекта о разделении экспортов компонентов и других значений и упрощает импорты.

## 8. Главный компонент: состояние и настоящие функции

Файл: `src/homeworks/Homework_14/Homework_14.tsx`.

```tsx
import { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { v4 } from "uuid";

import Layout from "./components/Layout/Layout";
import CreateEmployee from "./pages/CreateEmployee/CreateEmployee";
import Employees from "./pages/Employees/Employees";

import { EMPLOYEE_ROUTES } from "./constants";
import { EmployeesContext } from "./context";
import { type Employee, type EmployeeFormValues } from "./types";

function Homework_14() {
  const [employees, setEmployees] = useState<Employee[]>([]);

  const createEmployee = (values: EmployeeFormValues): void => {
    const newEmployee: Employee = { ...values, id: v4() };

    setEmployees((previousEmployees) => [...previousEmployees, newEmployee]);
  };

  const deleteEmployee = (id: string): void => {
    setEmployees((previousEmployees) =>
      previousEmployees.filter((employee) => employee.id !== id),
    );
  };

  const deleteAllEmployees = (): void => {
    setEmployees([]);
  };

  return (
    <EmployeesContext.Provider
      value={{ employees, createEmployee, deleteEmployee, deleteAllEmployees }}
    >
      <Layout>
        <Routes>
          <Route
            path={EMPLOYEE_ROUTES.CREATE_EMPLOYEE}
            element={<CreateEmployee />}
          />
          <Route path={EMPLOYEE_ROUTES.EMPLOYEES} element={<Employees />} />
          <Route
            path="*"
            element={<Navigate to={EMPLOYEE_ROUTES.CREATE_EMPLOYEE} replace />}
          />
        </Routes>
      </Layout>
    </EmployeesContext.Provider>
  );
}

export default Homework_14;
```

Теперь разберём его частями.

### Где хранится список

```tsx
const [employees, setEmployees] = useState<Employee[]>([]);
```

- `employees` — текущий список.
- `setEmployees` — функция, через которую задаём следующий список.
- `Employee[]` — массив объектов сотрудника.
- `[]` — начальное значение: сотрудников ещё нет.

Создали первого сотрудника — в массиве один объект. Создали второго — два объекта.

```text
Начало:            []
Создали John:      [John]
Создали Jack:      [John, Jack]
Удалили John:      [Jack]
Удалили всех:      []
```

React обновляет отображение после изменения состояния. Поэтому не нужно вручную искать карточки в HTML и удалять их.

### Создание сотрудника

```tsx
const createEmployee = (values: EmployeeFormValues): void => {
  const newEmployee: Employee = { ...values, id: v4() };

  setEmployees((previousEmployees) => [...previousEmployees, newEmployee]);
};
```

`values` — проверенные данные формы.

`...values` переносит поля из этого объекта в новый объект. `id: v4()` добавляет уникальный идентификатор.

Далее создаётся **новый массив**: сначала все старые сотрудники, затем новый сотрудник.

```text
previousEmployees          newEmployee
[John]                     Jack
             ↓
        [John, Jack]
```

Запись `setEmployees((previousEmployees) => ...)` — функциональное обновление состояния. React передаёт в эту функцию актуальное предыдущее значение. Это удобно, когда новый список строится на основе старого.

Мы не используем `employees.push(...)`: прямое изменение существующего массива не является правильным способом обновления React state.

### Удаление одной карточки

```tsx
const deleteEmployee = (id: string): void => {
  setEmployees((previousEmployees) =>
    previousEmployees.filter((employee) => employee.id !== id),
  );
};
```

`filter` создаёт новый массив. Он оставляет только сотрудников, у которых идентификатор **не равен** переданному `id`.

```text
До:   [{ id: "a", name: "John" }, { id: "b", name: "Jack" }]
Вызов: deleteEmployee("a")
После: [{ id: "b", name: "Jack" }]
```

Удаляем по `id`, потому что имена могут совпадать. Два сотрудника John Johnson всё равно должны иметь отдельные карточки и удаляться независимо.

### Удаление всех

```tsx
const deleteAllEmployees = (): void => {
  setEmployees([]);
};
```

Задаём пустой массив. Страница списка увидит, что сотрудников нет, и покажет пустое состояние.

## 9. Provider: что именно он делает

В главном компоненте есть:

```tsx
<EmployeesContext.Provider
  value={{ employees, createEmployee, deleteEmployee, deleteAllEmployees }}
>
  <Layout>
    <Routes>{/* страницы */}</Routes>
  </Layout>
</EmployeesContext.Provider>
```

Provider — компонент, который **делает значение из `value` доступным внутри своей области**. Видимой рамки или карточки на экране он не рисует.

В `value` лежит объект с четырьмя свойствами. Короткая запись:

```tsx
value={{ employees, createEmployee }}
```

означает то же, что:

```tsx
value={{ employees: employees, createEmployee: createEmployee }}
```

Вложенный компонент может получить нужные свойства:

```tsx
const { createEmployee } = useContext(EmployeesContext);
```

Форма получает функцию создания. Страница списка получает массив и функцию удаления всех. Карточка получает функцию удаления одного сотрудника.

```text
Homework_14
  хранит employees
  содержит настоящие функции
        │
        ▼
Provider value={данные и функции}
        │
        ├── форма:    useContext → createEmployee
        ├── список:  useContext → employees, deleteAllEmployees
        └── карточка: useContext → deleteEmployee
```

Промежуточному `Layout` не нужно принимать массив сотрудников и передавать его дальше. Он занимается только расположением страницы.

## 10. Зачем Provider выше маршрутов

При переходе с `/` на `/employees` компонент формы перестаёт отображаться, а компонент списка появляется.

Но `Homework_14` и его состояние остаются. Provider тоже остаётся. Поэтому созданные сотрудники не исчезают при переходе между страницами.

Если положить список только внутрь страницы формы, его жизненный цикл окажется связан с этой страницей. Для нашего приложения общее состояние находится выше обеих страниц.

Состояние существует в памяти приложения. При полном обновлении страницы список начинается заново с `[]`. Постоянное сохранение после обновления в этой работе не добавлялось: в задании требуется state и Context.

## 11. Как маршруты выбирают страницу

Внутри `Routes` написано:

```tsx
<Route path={EMPLOYEE_ROUTES.CREATE_EMPLOYEE} element={<CreateEmployee />} />
<Route path={EMPLOYEE_ROUTES.EMPLOYEES} element={<Employees />} />
```

`path` — какой адрес проверяем. `element` — какой компонент показываем при совпадении.

```text
Адрес /           → <CreateEmployee />
Адрес /employees  → <Employees />
```

Маршрут `*` обрабатывает неизвестные адреса и возвращает пользователя на страницу создания через `Navigate`.

`BrowserRouter` уже находится в `App`. Он нужен, чтобы `Routes`, `NavLink` и `Navigate` работали с адресом браузера. Второй `BrowserRouter` внутри домашки не создаётся.

Для самого отображения оболочки `Layout` маршруты необязательны. В **этой домашней работе** они нужны, потому что задание требует две страницы и переключение по ссылкам.

## 12. Layout: общая оболочка

Файл: `src/homeworks/Homework_14/components/Layout/types.ts`.

```ts
import { type ReactNode } from "react";

export interface LayoutProps {
  children: ReactNode;
}
```

`ReactNode` описывает содержимое, которое React может отобразить: элементы, текст, `null` и другие допустимые значения.

Файл: `src/homeworks/Homework_14/components/Layout/Layout.tsx`.

```tsx
import { EMPLOYEE_ROUTES } from "../../constants";

import { LayoutWrapper, Header, Logo, Navigation, HeaderLink, Main } from "./styles";
import { type LayoutProps } from "./types";

function Layout({ children }: LayoutProps) {
  return (
    <LayoutWrapper>
      <Header>
        <Logo>App Logo</Logo>
        <Navigation aria-label="Employee pages">
          <HeaderLink to={EMPLOYEE_ROUTES.CREATE_EMPLOYEE} end>
            Create Employee
          </HeaderLink>
          <HeaderLink to={EMPLOYEE_ROUTES.EMPLOYEES}>Employees</HeaderLink>
        </Navigation>
      </Header>
      <Main>{children}</Main>
    </LayoutWrapper>
  );
}

export default Layout;
```

Важная строка:

```tsx
<Main>{children}</Main>
```

`children` — содержимое между `<Layout>` и `</Layout>` при использовании компонента. У нас там находятся маршруты.

Получается:

```tsx
<Layout>
  <Routes>...</Routes>
</Layout>
```

а внутри `Layout` эти `Routes` оказываются в `Main`.

`NavLink` — ссылка React Router. Она меняет маршрут внутри приложения и получает класс `active`, когда её адрес соответствует текущей странице. В стилях этот класс делает активную ссылку жирной и подчёркнутой.

`end` у ссылки на `/` требует точного совпадения адреса. Это явно задаёт, что ссылка создания активна именно на начальной странице.

## 13. Валидация: сначала правила, потом форма

Файл: `src/homeworks/Homework_14/components/CreateEmployeeForm/validation.ts`.

```ts
import * as Yup from "yup";

import { EMPLOYEE_FORM_NAMES } from "../../types";

export const validationSchema = Yup.object().shape({
  [EMPLOYEE_FORM_NAMES.NAME]: Yup.string()
    .required("Name is required")
    .min(2, "Name must contain at least 2 characters")
    .max(50, "Name must contain no more than 50 characters"),
  [EMPLOYEE_FORM_NAMES.SURNAME]: Yup.string()
    .required("Surname is required")
    .max(15, "Surname must contain no more than 15 characters"),
  [EMPLOYEE_FORM_NAMES.AGE]: Yup.string()
    .required("Age is required")
    .min(1, "Age must contain at least 1 character")
    .max(3, "Age must contain no more than 3 characters"),
  [EMPLOYEE_FORM_NAMES.JOB_POSITION]: Yup.string().max(
    30,
    "Job Position must contain no more than 30 characters",
  ),
});
```

Схема Yup описывает допустимые значения каждого поля.

| Поле | Правила |
|---|---|
| Name | Обязательно, от 2 до 50 символов |
| Surname | Обязательно, не больше 15 символов |
| Age | Обязательно, строка длиной от 1 до 3 символов |
| Job Position | Необязательно, не больше 30 символов |

В этой реализации для Age проверяются именно наличие и длина строки. Дополнительного правила «только цифры» или числового диапазона возраста в исходном задании нет.

Разберём цепочку:

```ts
Yup.string()
  .required("Name is required")
  .min(2, "Name must contain at least 2 characters")
  .max(50, "Name must contain no more than 50 characters")
```

- `string()` — ожидаем строку.
- `required(...)` — пустое значение недопустимо.
- `min(2, ...)` — длина не меньше 2.
- `max(50, ...)` — длина не больше 50.
- Текст внутри каждого правила — сообщение об ошибке.

У Job Position нет `required`, поэтому пустая строка допустима.

Квадратные скобки вокруг `EMPLOYEE_FORM_NAMES.NAME` создают ключ объекта из значения выражения. Здесь итоговый ключ — `name`.

## 14. Форма: соединяем Formik, Input и Context

Файл: `src/homeworks/Homework_14/components/CreateEmployeeForm/CreateEmployeeForm.tsx`.

```tsx
import { useContext } from "react";
import { useFormik } from "formik";

import Button from "components/Button/Button";
import Input from "components/Input/Input";

import { EmployeesContext } from "../../context";
import { EMPLOYEE_FORM_NAMES, type EmployeeFormValues } from "../../types";

import { EmployeeForm, InputsContainer } from "./styles";
import { validationSchema } from "./validation";

function CreateEmployeeForm() {
  const { createEmployee } = useContext(EmployeesContext);

  const formik = useFormik<EmployeeFormValues>({
    initialValues: {
      name: "",
      surname: "",
      age: "",
      jobPosition: "",
    },
    validationSchema,
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit: (values, { resetForm }) => {
      createEmployee(values);
      resetForm();
    },
  });

  return (
    <EmployeeForm onSubmit={formik.handleSubmit} noValidate>
      <InputsContainer>
        <Input
          id="employee-name"
          name={EMPLOYEE_FORM_NAMES.NAME}
          label="Name*"
          placeholder="John"
          type="text"
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.errors.name}
        />
        <Input
          id="employee-surname"
          name={EMPLOYEE_FORM_NAMES.SURNAME}
          label="Surname*"
          placeholder="Johnson"
          type="text"
          value={formik.values.surname}
          onChange={formik.handleChange}
          error={formik.errors.surname}
        />
        <Input
          id="employee-age"
          name={EMPLOYEE_FORM_NAMES.AGE}
          label="Age*"
          placeholder="25"
          type="text"
          value={formik.values.age}
          onChange={formik.handleChange}
          error={formik.errors.age}
        />
        <Input
          id="employee-job-position"
          name={EMPLOYEE_FORM_NAMES.JOB_POSITION}
          label="Job Position"
          placeholder="QA"
          type="text"
          value={formik.values.jobPosition}
          onChange={formik.handleChange}
          error={formik.errors.jobPosition}
        />
      </InputsContainer>
      <Button name="Create" type="submit" />
    </EmployeeForm>
  );
}

export default CreateEmployeeForm;
```

### Сначала получаем функцию создания

```tsx
const { createEmployee } = useContext(EmployeesContext);
```

Форма не содержит собственный массив сотрудников. Она просит общий контекст создать сотрудника.

### Затем создаём Formik

```tsx
const formik = useFormik<EmployeeFormValues>({ ... });
```

`<EmployeeFormValues>` задаёт TypeScript форму значений: четыре строковых поля.

`initialValues` содержит начальные значения формы. Сначала все поля пустые.

`validationSchema` подключает уже созданные правила Yup.

`validateOnChange: false` и `validateOnBlur: false` отключают запуск проверки при вводе и уходе из поля. Проверка выполняется при отправке формы.

### Почему `name` поля важен

Посмотри на одно поле:

```tsx
<Input
  name={EMPLOYEE_FORM_NAMES.NAME}
  value={formik.values.name}
  onChange={formik.handleChange}
  error={formik.errors.name}
  // остальные свойства
/>
```

Здесь четыре связанные части:

1. `name="name"` сообщает Formik, какое значение менять.
2. `value={formik.values.name}` показывает текущее значение.
3. `onChange={formik.handleChange}` обновляет его при вводе.
4. `error={formik.errors.name}` передаёт ошибку компоненту Input.

`name` должен совпадать с ключом в `initialValues`. Атрибут `id` нужен для связи поля с подписью через `htmlFor`, а Formik использует именно `name`.

### Что происходит при Create

```tsx
<EmployeeForm onSubmit={formik.handleSubmit} noValidate>
  ...
  <Button name="Create" type="submit" />
</EmployeeForm>
```

`type="submit"` делает кнопку кнопкой отправки формы. Нажатие запускает `formik.handleSubmit`. Отправка также работает через Enter в поле.

`noValidate` отключает встроенную браузерную проверку формы, чтобы сообщениями управляли Formik и Yup.

Дальнейший порядок:

```text
Нажали Create
      ↓
Formik проверяет значения через Yup
      ↓
Есть ошибки? ── да ──→ записывает ошибки, показывает их под полями
      │
      нет
      ↓
вызывает onSubmit
      ↓
createEmployee(values)
      ↓
resetForm()
```

Если ошибки есть, пользовательский `onSubmit` не выполняется и сотрудник не создаётся.

Если ошибок нет:

```tsx
onSubmit: (values, { resetForm }) => {
  createEmployee(values);
  resetForm();
}
```

Мы передаём значения общей функции создания, затем возвращаем форму к пустым начальным значениям.

После успешного создания форма остаётся на своей странице. Созданную карточку можно увидеть, нажав ссылку `Employees`.

## 15. Почему использованы существующие Input и Button

В проекте уже были компоненты с подходящими свойствами. Поэтому форма использует их, как другие формы проекта.

Вот текущий код общего Input — это справка, файл находится вне Homework_14:

```tsx
import { type InputProps } from "./types";
import { InputWrapper, Label, InputComponent, ErrorText } from "./styles";
function Input({
  id,
  name,
  type,
  placeholder,
  label,
  error = undefined,
  disabled = false,
  onChange,
  value,
}: InputProps) {
  return (
    <InputWrapper>
      <Label htmlFor={id}>{label}</Label>
      <InputComponent
        disabled={disabled}
        $error={error}
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
      {!!error && <ErrorText>{error}</ErrorText>}
    </InputWrapper>
  );
}
export default Input;
```

В нём подпись связана с полем через `htmlFor={id}`. Ошибка рисуется только при наличии текста ошибки:

```tsx
{!!error && <ErrorText>{error}</ErrorText>}
```

`!!error` превращает значение в `true` или `false`. Если ошибка непустая, React показывает текст справа от `&&`.

Вот общий Button:

```tsx
import { ButtonComponent } from "./styles";
import { type ButtonProps } from "./types";

function Button({
  name,
  type = "button",
  onClick = () => {},
  isRed = false,
  disabled = false,
}: ButtonProps) {
  return (
    <ButtonComponent
      disabled={disabled}
      $isRed={isRed}
      onClick={onClick}
      type={type}
    >
      {name}
    </ButtonComponent>
  );
}

export default Button;
```

Он передаёт `onClick` и `type` настоящему HTML-элементу кнопки. По умолчанию используется `type="button"`. Для Create мы явно передаём `submit`, а кнопки удаления остаются обычными кнопками.

`name` в этом компоненте — видимый текст на кнопке. Это название его пропса в проекте.

Стили внутри домашки уточняют внешний вид этих компонентов только в нужных областях. Общие файлы Input и Button для этой работы не менялись.

## 16. Страница CreateEmployee

Файл: `src/homeworks/Homework_14/pages/CreateEmployee/CreateEmployee.tsx`.

```tsx
import CreateEmployeeForm from "../../components/CreateEmployeeForm/CreateEmployeeForm";

import { PageWrapper } from "./styles";

function CreateEmployee() {
  return (
    <PageWrapper>
      <CreateEmployeeForm />
    </PageWrapper>
  );
}

export default CreateEmployee;
```

Эта страница занимается размещением формы. Проверка полей находится в Yup, управление формой — в CreateEmployeeForm, список сотрудников — в Homework_14.

Небольшой компонент помогает держать эти задачи отдельно.

## 17. Страница Employees: превращаем массив в карточки

Файл: `src/homeworks/Homework_14/pages/Employees/Employees.tsx`.

```tsx
import { useContext } from "react";

import Button from "components/Button/Button";

import EmployeeCard from "../../components/EmployeeCard/EmployeeCard";
import { EmployeesContext } from "../../context";

import { PageWrapper, CardsContainer, ButtonControl, EmptyText } from "./styles";

function Employees() {
  const { employees, deleteAllEmployees } = useContext(EmployeesContext);

  return (
    <PageWrapper>
      {employees.length > 0 ? (
        <>
          <CardsContainer>
            {employees.map((employee) => (
              <EmployeeCard key={employee.id} employee={employee} />
            ))}
          </CardsContainer>
          <ButtonControl>
            <Button name="Remove All Employees" isRed onClick={deleteAllEmployees} />
          </ButtonControl>
        </>
      ) : (
        <EmptyText>No employees yet</EmptyText>
      )}
    </PageWrapper>
  );
}

export default Employees;
```

Сначала страница читает контекст:

```tsx
const { employees, deleteAllEmployees } = useContext(EmployeesContext);
```

Дальше проверяет длину массива:

```tsx
employees.length > 0 ? (...) : (...)
```

Это условие означает: если сотрудники есть, покажи карточки и кнопку удаления всех. Если нет — покажи `No employees yet`.

Главная строка списка:

```tsx
employees.map((employee) => (
  <EmployeeCard key={employee.id} employee={employee} />
))
```

`map` проходит по массиву и для каждого объекта возвращает компонент карточки.

```text
employees: [John, Jack]
                ↓ map
разметка:  [<EmployeeCard John />, <EmployeeCard Jack />]
```

`employee={employee}` передаёт одной карточке данные одного сотрудника через пропс.

`key={employee.id}` помогает React отличать элементы списка при добавлении и удалении. Ключ остаётся связан с сотрудником. Новый случайный ключ при каждом отображении здесь не создаётся.

### Кнопка удаления всех

```tsx
<Button name="Remove All Employees" isRed onClick={deleteAllEmployees} />
```

В `onClick` передана функция. Она будет вызвана при нажатии.

Мы не пишем `onClick={deleteAllEmployees()}`: такая запись вызвала бы функцию прямо при формировании разметки.

## 18. Одна карточка и её Delete

Файл: `src/homeworks/Homework_14/components/EmployeeCard/types.ts`.

```ts
import { type Employee } from "../../types";

export interface EmployeeCardProps {
  employee: Employee;
}
```

Этот тип говорит: карточке нужно передать свойство `employee` с объектом сотрудника.

Файл: `src/homeworks/Homework_14/components/EmployeeCard/EmployeeCard.tsx`.

```tsx
import { useContext } from "react";

import Button from "components/Button/Button";

import { EmployeesContext } from "../../context";

import { CardWrapper, EmployeeInfo, InfoLabel, InfoValue } from "./styles";
import { type EmployeeCardProps } from "./types";

function EmployeeCard({ employee }: EmployeeCardProps) {
  const { deleteEmployee } = useContext(EmployeesContext);

  return (
    <CardWrapper>
      <EmployeeInfo>
        <InfoLabel>Name</InfoLabel>
        <InfoValue>{employee.name}</InfoValue>
      </EmployeeInfo>
      <EmployeeInfo>
        <InfoLabel>Surname</InfoLabel>
        <InfoValue>{employee.surname}</InfoValue>
      </EmployeeInfo>
      <EmployeeInfo>
        <InfoLabel>Age</InfoLabel>
        <InfoValue>{employee.age}</InfoValue>
      </EmployeeInfo>
      <EmployeeInfo>
        <InfoLabel>Job Position</InfoLabel>
        <InfoValue>{employee.jobPosition || "—"}</InfoValue>
      </EmployeeInfo>
      <Button
        name="Delete"
        isRed
        onClick={() => deleteEmployee(employee.id)}
      />
    </CardWrapper>
  );
}

export default EmployeeCard;
```

Данные сотрудника приходят через пропс. Функцию удаления карточка получает из контекста:

```tsx
const { deleteEmployee } = useContext(EmployeesContext);
```

Пропсы и Context можно использовать вместе. В этом случае страница выбирает, какого сотрудника передать карточке, а общий Context предоставляет действие удаления.

### Почему у Delete стрелочная функция

```tsx
onClick={() => deleteEmployee(employee.id)}
```

Карточка знает свой `employee.id`. Стрелочная функция откладывает вызов удаления до нажатия кнопки и передаёт нужный идентификатор.

```text
Нажали Delete у John
      ↓
вызывается обработчик этой карточки
      ↓
deleteEmployee(id сотрудника John)
      ↓
функция в Homework_14 создаёт массив без этого id
      ↓
Provider передаёт новый employees
      ↓
Employees снова строит карточки через map
      ↓
карточка John исчезает
```

`employee.jobPosition || "—"` показывает тире, если необязательное поле должности оставлено пустым.

## 19. Полный путь данных: от ввода до карточки

Попробуй проследить один пример:

```text
1. Вводим John, Johnson, 25, QA
   Значения находятся в formik.values.

2. Нажимаем Create
   Formik запускает Yup.

3. Значения прошли проверку
   Formik вызывает onSubmit(values).

4. onSubmit вызывает createEmployee(values)
   Функция получена через useContext.

5. createEmployee выполняется в Homework_14
   Создаёт объект с id и добавляет его в employees.

6. Formik очищает форму через resetForm()

7. Открываем Employees
   Страница читает массив из Context.

8. map создаёт EmployeeCard
   Карточка показывает данные нового сотрудника.
```

**Значения формы и массив сотрудников — разные данные.** Очистка формы после создания не удаляет сотрудника: его объект уже добавлен в общий список.

## 20. Стили и размеры

Стили написаны через Emotion, как в проекте:

```ts
import styled from "@emotion/styled";

export const PageWrapper = styled.div`
  display: flex;
`;
```

`styled.div` создаёт React-компонент, который рисует `div` с указанными CSS-правилами. Аналогично используются `styled.form`, `styled.header`, `styled.main`, `styled.article` и `styled(NavLink)`.

Основные размеры реализации при ширине экрана 1440 px:

| Элемент | Размер или значение |
|---|---|
| Шапка | 120 px по высоте |
| Форма | 590 × 592 px без ошибок |
| Отступы внутри формы | 60 px |
| Расстояние между блоками полей | 20 px |
| Create | 470 × 70 px |
| Карточка с короткими данными | 635 × 570 px |
| Фон | `#112233` |
| Цвет Create | `#1F27F5` |
| Цвет удаления | `#D40000` |

Высота формы увеличивается, если появляются ошибки. Высота карточки может увеличиться, если длинные значения переносятся на несколько строк.

Два сотрудника при ширине 1440 px располагаются рядом. На узком экране карточки переходят в одну колонку, уменьшаются внешние и внутренние отступы.

Шрифт Lato сохранён локально в `public/fonts`, вместе с лицензией. Пути `/fonts/lato-regular.ttf` и `/fonts/lato-bold.ttf` ведут к этим файлам. При отображении приложения запрос к Figma для шрифта не нужен.

Ниже весь код стилей этой домашней работы.

### Общая оболочка

Файл: `src/homeworks/Homework_14/components/Layout/styles.ts`.

```ts
import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const LayoutWrapper = styled.div`
  @font-face {
    font-family: "Lato";
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url("/fonts/lato-regular.ttf") format("truetype");
  }

  @font-face {
    font-family: "Lato";
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: url("/fonts/lato-bold.ttf") format("truetype");
  }

  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 0;
  background-color: #112233;
  color: #1e1e1e;
  font-family: "Lato", sans-serif;

  input,
  button {
    font-family: inherit;
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 32px;
  min-height: 120px;
  padding: 24px 81px;
  border: 1px solid #000000;
  background-color: #faf9ff;
  color: #000000;

  @media (max-width: 700px) {
    flex-wrap: wrap;
    gap: 20px;
    padding: 24px;
  }
`;

export const Logo = styled.div`
  flex-shrink: 0;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
`;

export const Navigation = styled.nav`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 56px;

  @media (max-width: 700px) {
    gap: 24px;
  }
`;

export const HeaderLink = styled(NavLink)`
  color: #000000;
  font-size: 28px;
  font-weight: 400;
  line-height: 36px;
  text-decoration: none;

  &.active {
    font-weight: 700;
    text-decoration: underline;
    text-underline-offset: 6px;
  }

  @media (max-width: 700px) {
    font-size: 20px;
    line-height: 28px;
  }
`;

export const Main = styled.main`
  display: flex;
  flex: 1;
  min-width: 0;
`;
```

`&.active` относится к самой ссылке с классом `active`. `@media` задаёт правила для узкого экрана.

### Форма

Файл: `src/homeworks/Homework_14/components/CreateEmployeeForm/styles.ts`.

```ts
import styled from "@emotion/styled";

export const EmployeeForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 590px;
  max-width: 100%;
  padding: 60px;
  border-radius: 4px;
  background-color: #ffffff;

  label {
    color: #6f6f6f;
    line-height: 24px;
  }

  input {
    font-size: 16px;
    line-height: 24px;

    &::placeholder {
      color: #a3a3a3;
    }

    &:focus-visible {
      outline: 2px solid #1f27f5;
      outline-offset: 2px;
    }
  }

  button {
    border-radius: 4px;
    background-color: #1f27f5;
    font-weight: 600;
    line-height: 30px;

    &:hover {
      background-color: #171dcc;
    }

    &:focus-visible {
      outline: 2px solid #1f27f5;
      outline-offset: 3px;
    }
  }

  @media (max-width: 600px) {
    padding: 28px;
  }
`;

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
```

Правила `label`, `input` и `button` внутри `EmployeeForm` действуют на элементы внутри этой формы. Поэтому они уточняют оформление существующих Input и Button в этой домашке.

`max-width: 100%` не даёт фиксированной ширине формы выходить за доступную область на узком экране.

### Карточка

Файл: `src/homeworks/Homework_14/components/EmployeeCard/styles.ts`.

```ts
import styled from "@emotion/styled";

export const CardWrapper = styled.article`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 635px;
  max-width: 100%;
  padding: 60px;
  border-radius: 4px;
  background-color: #ffffff;

  button {
    border-radius: 4px;
    background-color: #d40000;
    font-weight: 600;
    line-height: 30px;

    &:hover {
      background-color: #b30000;
    }

    &:focus-visible {
      outline: 2px solid #d40000;
      outline-offset: 3px;
    }
  }

  @media (max-width: 600px) {
    padding: 28px;
  }
`;

export const EmployeeInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const InfoLabel = styled.p`
  color: #6f6f6f;
  font-size: 16px;
  line-height: 24px;
`;

export const InfoValue = styled.p`
  color: #1e1e1e;
  font-size: 28px;
  font-weight: 700;
  line-height: 37px;
  white-space: pre-wrap;
  overflow-wrap: anywhere;
`;
```

`overflow-wrap: anywhere` разрешает переносить длинный непрерывный текст, чтобы он не выходил за карточку.

### Страница создания

Файл: `src/homeworks/Homework_14/pages/CreateEmployee/styles.ts`.

```ts
import styled from "@emotion/styled";

export const PageWrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: flex-start;
  min-width: 0;
  padding: 118px 40px 80px;

  @media (max-width: 700px) {
    padding: 40px 20px;
  }
`;
```

`justify-content: center` центрирует форму по горизонтали. `padding` задаёт расстояние от шапки и краёв основной области.

### Страница списка

Файл: `src/homeworks/Homework_14/pages/Employees/styles.ts`.

```ts
import styled from "@emotion/styled";

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 125px;
  flex: 1;
  min-width: 0;
  padding: 84px 50px 54px 55px;

  @media (max-width: 700px) {
    gap: 40px;
    padding: 40px 20px;
  }
`;

export const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  gap: 65px;
  width: 100%;

  @media (max-width: 700px) {
    gap: 24px;
  }
`;

export const ButtonControl = styled.div`
  width: 700px;
  max-width: 100%;

  button {
    border-radius: 4px;
    background-color: #d40000;
    font-weight: 600;
    line-height: 30px;

    &:hover {
      background-color: #b30000;
    }

    &:focus-visible {
      outline: 2px solid #d40000;
      outline-offset: 3px;
    }
  }
`;

export const EmptyText = styled.p`
  color: #ffffff;
  font-size: 24px;
  line-height: 36px;
  text-align: center;
`;
```

`flex-wrap: wrap` разрешает перенос карточек на следующую строку. Кнопка удаления всех находится отдельно под контейнером карточек.

## 21. Подключение в App

В `src/App.tsx` активен импорт:

```tsx
import Homework_14 from "homeworks/Homework_14/Homework_14";
```

Активная часть разметки соответствует этому сокращённому примеру:

```tsx
function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Homework_14 />
    </BrowserRouter>
  );
}
```

В реальном App также сохранены закомментированные примеры других уроков, домашних работ и старых маршрутов. Комментарии не отображаются и не участвуют в работе Homework_14.

## 22. Как проверять самостоятельно

Запуск из папки проекта:

```bash
npm run dev
```

Открой адрес, который напечатает Vite в терминале. Порт зависит от запуска и доступности портов, поэтому ориентируйся на строку `Local`.

| Действие | Ожидаемый результат |
|---|---|
| Открыть Create Employee | Пустая форма, активная ссылка подчёркнута |
| Нажать Create с пустыми полями | Ошибки под Name, Surname, Age |
| Ввести односимвольное Name | После Create — ошибка минимальной длины |
| Превысить любой максимум длины | После Create — ошибка соответствующего поля |
| Заполнить обязательные поля, оставить должность пустой | Сотрудник создаётся |
| Создать сотрудника | Форма очищается |
| Перейти на Employees | Появляется карточка созданного сотрудника |
| Создать ещё одного | В списке сохраняются оба |
| Перейти на форму и обратно | Список сохраняется |
| Создать двух сотрудников с одинаковыми именами | Появляются две отдельные карточки |
| Нажать Delete у одной карточки | Удаляется только выбранный сотрудник |
| Нажать Remove All Employees | Все карточки исчезают, появляется No employees yet |
| Сузить окно | Карточки переносятся, горизонтальная прокрутка не нужна |
| Полностью обновить страницу | Список сбрасывается, потому что хранится в state |

Проверка компиляции:

```bash
npm run build
```

Проверка линтером файлов этой работы:

```bash
./node_modules/.bin/eslint src/App.tsx src/homeworks/Homework_14
```

При создании реализации сборка и эта проверка ESLint прошли. В отдельном Google Chrome были проверены обязательность полей, границы длины, создание, переходы, удаление по id и удаление всех. Также проверены размеры формы и карточек на экране 1440 px и отсутствие горизонтального переполнения на ширине 375 px.

Это результат проверки версии, по которой сделан конспект. После изменения кода проверки нужно повторять.

## 23. Что говорить при объяснении работы

**Где хранится список?**

В состоянии `employees` компонента Homework_14.

**Зачем Context?**

Форма и страница списка используют общие данные и действия. Provider предоставляет их обеим страницам без передачи через Layout.

**Что делает Provider?**

Предоставляет через `value` текущий список и функции вложенным компонентам.

**Что делает useContext?**

Читает значение ближайшего соответствующего Provider выше компонента.

**Что делает Formik?**

Хранит значения формы, обрабатывает ввод и отправку, записывает ошибки и очищает форму.

**Что делает Yup?**

Проверяет значения по заданным правилам.

**Почему карточка не создаётся при ошибках?**

Formik не вызывает пользовательский onSubmit, пока проверка не пройдена.

**Почему нужен id?**

Чтобы независимо удалять сотрудников с одинаковыми данными и использовать стабильный key в списке.

**Почему filter?**

Он возвращает новый массив без выбранного сотрудника. Новый массив передаётся в setEmployees.

**Почему данные не исчезают при смене страницы?**

Состояние находится в Homework_14 выше маршрутов. Меняется отображаемая страница, но общий компонент остаётся.

**Почему после перезагрузки список пустой?**

Состояние создаётся заново. Сохранение на сервере или в хранилище браузера в этом задании не реализовано.

## 24. Короткая памятка по файлам

```text
types.ts                → какие данные и функции допустимы
constants.ts            → какие адреса используем
context.ts              → создаём Context
Homework_14.tsx         → храним state и предоставляем его через Provider
Layout.tsx              → размещаем шапку и содержимое страницы
validation.ts           → задаём правила полей
CreateEmployeeForm.tsx  → управляем вводом и создаём сотрудника
CreateEmployee.tsx      → размещаем форму на странице
Employees.tsx           → читаем список и рисуем карточки
EmployeeCard.tsx        → показываем одного сотрудника и удаляем его по id
styles.ts               → оформляем каждый блок
App.tsx                 → включаем Homework_14 в приложение
```

Если нужно понять работу в первый раз, читай в этом порядке: **типы → контекст → главный компонент → Provider → форма → список → карточка**. Затем вернись к маршрутам и стилям.
