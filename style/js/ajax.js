/* Article FructCode.com */
$(document).ready(function () {
    $("#btn").click(
        function () {
            sendAjaxForm('result_form', 'ajax_form', 'ajax_form.php');
            return false;
        }
    );
});

function sendAjaxForm(result_form, ajax_form, url) {
    $.ajax({
        url: url, //url страницы (action_ajax_form.php)
        type: "POST", //метод отправки
        dataType: "html", //формат данных
        data: $("#" + ajax_form).serialize(),  // Сеарилизуем объект
        success: function (response) { //Данные отправлены успешно
            result = $.parseJSON(response);
            $('.modal__window').html(
                `<div class="modal__logo">
                <svg width="54" height="26" viewBox="0 0 54 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.488 26V25.28C16.256 25.232 16.832 25.136 17.216 24.992C17.6 24.848 17.852 24.56 17.972 24.128C18.116 23.696 18.188 23.048 18.188 22.184V4.328C18.188 3.44 18.116 2.792 17.972 2.384C17.852 1.952 17.588 1.664 17.18 1.52C16.796 1.352 16.232 1.256 15.488 1.232V0.512C16.136 0.536 16.976 0.559999 18.008 0.583999C19.064 0.607999 20.108 0.619998 21.14 0.619998C22.244 0.619998 23.276 0.607999 24.236 0.583999C25.22 0.559999 26.012 0.536 26.612 0.512V1.232C25.844 1.256 25.256 1.352 24.848 1.52C24.464 1.664 24.212 1.952 24.092 2.384C23.972 2.792 23.912 3.44 23.912 4.328V22.184C23.912 23.048 23.972 23.696 24.092 24.128C24.236 24.56 24.5 24.848 24.884 24.992C25.268 25.136 25.844 25.232 26.612 25.28V26C26.012 25.952 25.22 25.928 24.236 25.928C23.276 25.904 22.244 25.892 21.14 25.892C20.108 25.892 19.064 25.904 18.008 25.928C16.976 25.928 16.136 25.952 15.488 26ZM0.224 26V25.28C0.992 25.232 1.568 25.136 1.952 24.992C2.336 24.848 2.588 24.56 2.708 24.128C2.852 23.696 2.924 23.048 2.924 22.184V4.328C2.924 3.44 2.852 2.792 2.708 2.384C2.588 1.952 2.324 1.664 1.916 1.52C1.532 1.352 0.968 1.256 0.224 1.232V0.512C0.848 0.536 1.652 0.559999 2.636 0.583999C3.644 0.607999 4.736 0.619998 5.912 0.619998C6.92 0.619998 7.916 0.607999 8.9 0.583999C9.884 0.559999 10.7 0.536 11.348 0.512V1.232C10.58 1.256 9.992 1.352 9.584 1.52C9.2 1.664 8.948 1.952 8.828 2.384C8.708 2.792 8.648 3.44 8.648 4.328V22.184C8.648 23.048 8.708 23.696 8.828 24.128C8.972 24.56 9.236 24.848 9.62 24.992C10.004 25.136 10.58 25.232 11.348 25.28V26C10.7 25.952 9.884 25.928 8.9 25.928C7.916 25.904 6.92 25.892 5.912 25.892C4.736 25.892 3.644 25.904 2.636 25.928C1.652 25.928 0.848 25.952 0.224 26ZM6.308 13.544V12.824H20.528V13.544H6.308ZM53.677 0.512C53.581 1.592 53.509 2.636 53.461 3.644C53.437 4.652 53.425 5.432 53.425 5.984C53.425 6.512 53.437 7.016 53.461 7.496C53.485 7.976 53.509 8.384 53.533 8.72H52.705C52.393 6.848 51.961 5.384 51.409 4.328C50.857 3.248 50.173 2.48 49.357 2.024C48.565 1.568 47.617 1.34 46.513 1.34H45.325C44.629 1.34 44.101 1.4 43.741 1.52C43.381 1.64 43.141 1.88 43.021 2.24C42.901 2.6 42.841 3.152 42.841 3.896V21.968C42.841 22.904 42.937 23.6 43.129 24.056C43.321 24.512 43.693 24.812 44.245 24.956C44.797 25.1 45.613 25.184 46.693 25.208V26C45.949 25.976 44.989 25.952 43.813 25.928C42.637 25.904 41.401 25.892 40.105 25.892C39.073 25.892 38.065 25.904 37.081 25.928C36.097 25.952 35.209 25.976 34.417 26V25.28C35.185 25.232 35.761 25.136 36.145 24.992C36.529 24.848 36.781 24.56 36.901 24.128C37.045 23.696 37.117 23.048 37.117 22.184V4.328C37.117 3.44 37.045 2.792 36.901 2.384C36.781 1.952 36.517 1.664 36.109 1.52C35.725 1.352 35.161 1.256 34.417 1.232V0.512C35.401 0.536 36.445 0.559999 37.549 0.583999C38.653 0.583999 39.745 0.595999 40.825 0.619998C41.905 0.619998 42.913 0.619998 43.849 0.619998C44.785 0.619998 45.553 0.619998 46.153 0.619998C47.257 0.619998 48.505 0.619998 49.897 0.619998C51.313 0.595999 52.573 0.559999 53.677 0.512ZM48.313 12.968C48.313 12.968 48.313 13.088 48.313 13.328C48.313 13.568 48.313 13.688 48.313 13.688H41.761C41.761 13.688 41.761 13.568 41.761 13.328C41.761 13.088 41.761 12.968 41.761 12.968H48.313ZM49.213 8.216C49.117 9.584 49.069 10.628 49.069 11.348C49.093 12.068 49.105 12.728 49.105 13.328C49.105 13.928 49.117 14.588 49.141 15.308C49.165 16.028 49.225 17.072 49.321 18.44H48.493C48.349 17.6 48.121 16.82 47.809 16.1C47.497 15.38 47.041 14.804 46.441 14.372C45.841 13.916 45.061 13.688 44.101 13.688V12.968C44.821 12.968 45.421 12.824 45.901 12.536C46.405 12.224 46.825 11.828 47.161 11.348C47.497 10.844 47.761 10.316 47.953 9.764C48.145 9.212 48.289 8.696 48.385 8.216H49.213Z" fill="#764518" />
                </svg>
            </div>
            <div class="modal__title">
                Дорогой <b>${result.namemodal}</b>
            </div>
            <div class=" modal__title modal__thanks">
                Спасибо за бронирование
            </div>
            <div class="modal__title">
                Бронирование назначено на:
            </div>
            <div class="modal__title">
                Дата: <b>${result.datemodal}</b><br>
                Время: <b>${result.timemodal}</b><br>
                Количество гостей: <b>${result.guestmodal}</b>
            </div>
            <div class="modal__title">
                Адресс: <b>Гагарина, 10</b>
            </div>`
            );
        },
        error: function (response) { // Данные не отправлены
            $('.modal__title').html('Ошибка. Данные не отправлены.');
        }
    });
}