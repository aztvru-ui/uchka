// ============================================
// КАЛЕНДАРЬ
// ============================================

const semesterStart = new Date(2026, 7, 31);

let currentWeek = 1;


// ============================================
// ВРЕМЯ ПАР
// ============================================

const lessonTimes = {

    1: "08:00–09:35",
    2: "09:50–11:25",
    3: "11:40–13:15",
    4: "13:45–15:20"

};


// ============================================
// ИСКЛЮЧЕНИЯ
// ============================================

const exceptions = {

    "2026-08-31": "выходной",
    "2026-09-01": "выходной"

};


// ============================================
// СОБЫТИЯ
// ============================================

const events = {

    monday: {
        title: "Рассредоточенная практика",
        description: "Весь учебный день"
    }

};


// ============================================
// КРАСНОЕ РАСПИСАНИЕ
// ============================================

const redSchedule = {

    monday: {},

    tuesday: {

        1: {
            subject: "Методика обучения и воспитания (литература)",
            type: "Лекция"
        },

        2: {
            subject: "Методика обучения и воспитания (литература)",
            type: "Практика"
        },

        3: {
            subject: "История зарубежной литературы",
            type: "Практика"
        },

        4: null

    },


    wednesday: {

        2: {
            subject: "Методика обучения и воспитания (русский язык)",
            type: "Практика"
        },

        3: {
            subject: "История русской литературы",
            type: "Практика"
        },

        4: {
            subject: "Актуальные проблемы лингвистики",
            type: "Лекция"
        }

    },


    thursday: {

        2: {
            subject: "Современный русский язык",
            type: "Практика"
        },

        3: {
            subject: "Современный русский язык",
            type: "Лекция"
        },

        4: {
            subject: "Методика обучения и воспитания (русский язык)",
            type: "Практика"
        }

    },


    friday: {

        2: {
            subject: "История русской литературы",
            type: "Лекция"
        },

        3: {
            subject: "История русского литературного языка",
            type: "Лекция"
        },

        4: {
            subject: "Специальная лексика русского языка",
            type: "Практика"
        }

    }

};


// ============================================
// СИНЕЕ РАСПИСАНИЕ
// ============================================

const blueSchedule = {

    monday: {},

    tuesday: {

        1: {
            subject: "Методика обучения и воспитания (литература)",
            type: "Практика"
        },

        2: {
            subject: "Методика обучения и воспитания (литература)",
            type: "Практика"
        },

        3: {
            subject: "История зарубежной литературы",
            type: "Лекция"
        },

        4: {
            subject: "История зарубежной литературы",
            type: "Практика"
        }

    },


    wednesday: {

        2: null,

        3: {
            subject: "История русской литературы",
            type: "Практика"
        },

        4: {
            subject: "Актуальные проблемы лингвистики",
            type: "Практика"
        }

    },


    thursday: {

        2: {
            subject: "Современный русский язык",
            type: "Практика"
        },

        3: {
            subject: "Методика обучения и воспитания (русский язык)",
            type: "Лекция"
        },

        4: {
            subject: "Методика обучения и воспитания (русский язык)",
            type: "Практика"
        }

    },


    friday: {

        2: {
            subject: "История русского литературного языка",
            type: "Практика"
        },

        3: {
            subject: "Специальная лексика русского языка",
            type: "Лекция"
        },

        4: {
            subject: "Специальная лексика русского языка",
            type: "Практика"
        }

    }

};


// ============================================
// РАБОТА С ДАТАМИ
// ============================================

function formatDate(date) {

    const day =
        String(date.getDate()).padStart(2, "0");

    const month =
        String(date.getMonth() + 1).padStart(2, "0");

    return day + "." + month;

}


function getDateKey(date) {

    const year =
        date.getFullYear();

    const month =
        String(date.getMonth() + 1).padStart(2, "0");

    const day =
        String(date.getDate()).padStart(2, "0");

    return year + "-" + month + "-" + day;

}


function getWeekStart(weekNumber) {

    const date =
        new Date(semesterStart);

    date.setDate(
        semesterStart.getDate() +
        (weekNumber - 1) * 7
    );

    return date;

}


// ============================================
// ОПРЕДЕЛЕНИЕ НЕДЕЛИ
// ============================================

function getWeekName() {

    if (currentWeek % 2 === 1) {

        return "Красная неделя";

    }

    return "Синяя неделя";

}


function getSchedule() {

    if (currentWeek % 2 === 1) {

        return redSchedule;

    }

    return blueSchedule;

}


// ============================================
// ОБНОВЛЕНИЕ РАСПИСАНИЯ
// ============================================

function updateSchedule() {

    const weekStart =
        getWeekStart(currentWeek);


    const dates = [];


    // ========================================
    // ПОЛУЧАЕМ ДАТЫ НЕДЕЛИ
    // ========================================

    for (let i = 0; i < 5; i++) {

        const date =
            new Date(weekStart);

        date.setDate(
            weekStart.getDate() + i
        );

        dates.push(date);

    }


    // ========================================
    // НАЗВАНИЕ НЕДЕЛИ
    // ========================================

    document.getElementById("weekTitle").textContent =
        getWeekName();


    // ========================================
    // ЦВЕТ НЕДЕЛИ
    // ========================================

    document.body.classList.remove(
        "red-week",
        "blue-week"
    );


    if (currentWeek % 2 === 1) {

        document.body.classList.add("red-week");

    } else {

        document.body.classList.add("blue-week");

    }


    // ========================================
    // ДИАПАЗОН ДАТ
    // ========================================

    document.getElementById("weekDates").textContent =
        formatDate(dates[0]) +
        " – " +
        formatDate(dates[4]);


    // ========================================
    // НАЗВАНИЯ ДНЕЙ
    // ========================================

    const dayNames = [
        "Пн",
        "Вт",
        "Ср",
        "Чт",
        "Пт"
    ];


    const columns = [
        "monday",
        "tuesday",
        "wednesday",
        "thursday",
        "friday"
    ];


    // ========================================
    // ЗАГОЛОВКИ ДНЕЙ
    // ========================================

    for (let i = 0; i < 5; i++) {

        const header =
            document.getElementById(columns[i]);

        const exception =
            exceptions[getDateKey(dates[i])];


        if (exception) {

            header.textContent =
                dayNames[i] +
                ", " +
                formatDate(dates[i]) +
                " (" +
                exception +
                ")";

        } else {

            header.textContent =
                dayNames[i] +
                ", " +
                formatDate(dates[i]);

        }

    }


    // ========================================
    // ВРЕМЯ ПАР
    // ========================================

    for (let lesson = 1; lesson <= 4; lesson++) {

        document.getElementById(
            "time" + lesson
        ).textContent =
            lessonTimes[lesson];

    }


    // ========================================
    // ПОЛУЧАЕМ РАСПИСАНИЕ
    // ========================================

    const schedule =
        getSchedule();


    // ========================================
    // ОЧИЩАЕМ ТАБЛИЦУ
    // ========================================

    for (let day of columns) {

        for (let lesson = 1; lesson <= 4; lesson++) {

            document.getElementById(
                day + lesson
            ).innerHTML = "";

        }

    }


    // ========================================
    // ЗАПОЛНЯЕМ ТАБЛИЦУ
    // ========================================

    for (let i = 0; i < 5; i++) {

        const day =
            columns[i];

        const date =
            dates[i];


        // ====================================
        // ПРОВЕРЯЕМ ИСКЛЮЧЕНИЕ
        // ====================================

        if (exceptions[getDateKey(date)]) {

            for (let lesson = 1; lesson <= 4; lesson++) {

                document.getElementById(
                    day + lesson
                ).textContent = "Нет занятий";

            }

            continue;

        }


        const daySchedule =
            schedule[day];


        if (!daySchedule) {
            continue;
        }


        // ====================================
        // ЗАПОЛНЯЕМ ПАРЫ
        // ====================================

        for (let lesson = 1; lesson <= 4; lesson++) {

            const lessonData =
                daySchedule[lesson];


            if (!lessonData) {
                continue;
            }


            const cell =
                document.getElementById(
                    day + lesson
                );


            // Дата в формате YYYY-MM-DD

            const dateKey =
                getDateKey(date);


            // Создаём ссылку на lesson.html

            const link =
                "lesson.html" +
                "?date=" + dateKey +
                "&day=" + day +
                "&lesson=" + lesson;


            cell.innerHTML =
                "<a href=\"" +
                link +
                "\">" +

                "<strong>" +
                lessonData.subject +
                "</strong>" +

                "<br>" +

                lessonData.type +

                "</a>";

        }

    }


    // ========================================
    // СОБЫТИЯ НЕДЕЛИ
    // ========================================

    const eventsBlock =
        document.getElementById("events");


    eventsBlock.innerHTML = "";


    // ========================================
    // СОБЫТИЕ ПОНЕДЕЛЬНИКА
    // ========================================

    const mondayDate =
        dates[0];

    const mondayException =
        exceptions[getDateKey(mondayDate)];


    if (
        events.monday &&
        !mondayException
    ) {

        eventsBlock.innerHTML =
            "<strong>Понедельник:</strong><br>" +
            events.monday.title +
            "<br>" +
            events.monday.description;

    } else {

        eventsBlock.textContent =
            "Событий нет.";

    }

}


// ============================================
// ПРЕДЫДУЩАЯ НЕДЕЛЯ
// ============================================

document.getElementById(
    "previousWeek"
).addEventListener(
    "click",
    function() {

        if (currentWeek > 1) {

            currentWeek--;

            updateSchedule();

        }

    }
);


// ============================================
// СЛЕДУЮЩАЯ НЕДЕЛЯ
// ============================================

document.getElementById(
    "nextWeek"
).addEventListener(
    "click",
    function() {

        currentWeek++;

        updateSchedule();

    }
);


// ============================================
// ТЕКУЩАЯ НЕДЕЛЯ
// ============================================

document.getElementById(
    "currentWeek"
).addEventListener(
    "click",
    function() {

        const today =
            new Date();


        const difference =
            today.getTime() -
            semesterStart.getTime();


        const week =
            Math.floor(
                difference /
                (1000 * 60 * 60 * 24 * 7)
            ) + 1;


        if (week >= 1) {

            currentWeek = week;

        } else {

            currentWeek = 1;

        }


        updateSchedule();

    }
);


// ============================================
// ЗАПУСК
// ============================================

updateSchedule();
