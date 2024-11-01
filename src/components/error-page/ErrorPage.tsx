/**
 * Компонент ErrorPage
 * 
 * Этот компонент используется для отображения ошибок, возникающих при маршрутизации.
 * Он корректно обрабатывает ошибки, возвращаемые `useRouteError`, и предоставляет
 * понятное сообщение об ошибке в зависимости от типа ошибки.
 * 
 * @returns JSX-элемент, отображающий сообщение об ошибке.
 */

import { FC } from "react";
import { useRouteError, isRouteErrorResponse } from "react-router-dom"

const ErrorPage: FC = () => {
  // Получаем ошибку, возникшую при маршрутизации, через хук useRouteError
  const error = useRouteError();
  let errorMessage: string;

  /**
   * Логика обработки ошибки
   * 
   * Проверяем тип ошибки, используя `isRouteErrorResponse`. Если это ошибка 
   * маршрутизации (ErrorResponse), получаем сообщение из `data` или 
   * используем `statusText` в качестве резервного значения.
   */
  if (isRouteErrorResponse(error)) {
    // Обработка типичных ошибок маршрутизации
    errorMessage = error.data?.message || error.statusText;
  } else if (error instanceof Error) {
    // Обработка ошибок типа Error (например, ошибок, выброшенных в коде)
    errorMessage = error.message;
  } else if (typeof error === 'string') {
    // Обработка ошибок, переданных в виде строк
    errorMessage = error
  } else {
    // Логируем неизвестный формат ошибки в консоль и устанавливаем резервное сообщение
    console.error(error);
    errorMessage = 'Unknown error';
  }

  /**
   * Отображение
   * 
   * Возвращаем разметку с сообщением об ошибке. В зависимости от типа ошибки, 
   * в `errorMessage` будет содержаться соответствующее сообщение.
   */
  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{errorMessage}</i>
      </p>
    </div>
  )
}

export default ErrorPage