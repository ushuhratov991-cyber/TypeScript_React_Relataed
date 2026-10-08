// CreateEmployeeForm содержит поля ввода и Formik-логику отправки.
import CreateEmployeeForm from "../../components/CreateEmployeeForm/CreateEmployeeForm";
// Page и PageContent являются Emotion-обёртками страницы.
import { Page, PageContent } from "./styles";

// CreateEmployee собирает страницу из контейнера и формы.
function CreateEmployee() {
  return (
    // Page задаёт общие отступы и центрирует содержимое на странице.
    <Page>
      {/* PageContent ограничивает и центрирует форму. */}
      <PageContent>
        {/* Форма использует Context для создания записи. */}
        <CreateEmployeeForm />
      </PageContent>
    </Page>
  );
}

// Экспорт нужен для подключения страницы в таблицу маршрутов.
export default CreateEmployee;
