// ============================================
// ДАННЫЕ ИЗ ССЫЛКИ
// ============================================

const params =
    new URLSearchParams(window.location.search);


const dateKey =
    params.get("date");

const day =
    params.get("day");

const lessonNumber =
    params.get("lesson");


// ============================================
// ПРОВЕРКА ДАННЫХ ИЗ ССЫЛКИ
// ============================================

if (!dateKey || !day || !lessonNumber) {

    document.getElementById("subject").textContent =
        "Занятие не найдено";

} else {


    // ========================================
    // ВРЕМЯ ПАР
    // ========================================

    const lessonTimes = {

        1: "08:00–09:35",
        2: "09:50–11:25",
        3: "11:40–13:15",
        4: "13:45–15:20"

    };


    // ========================================
    // КРАСНОЕ РАСПИСАНИЕ
    // ========================================

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
            }

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


    // ========================================
    // СИНЕЕ РАСПИСАНИЕ
    // ========================================

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


    // ========================================
    // ОПРЕДЕЛЯЕМ НОМЕР НЕДЕЛИ
    // ========================================

    function getWeekNumber(date) {

        const start =
            new Date(2026, 7, 31);


        const target =
            new Date(date);


        const difference =
            target.getTime() -
            start.getTime();


        return Math.floor(
            difference /
            (1000 * 60 * 60 * 24 * 7)
        ) + 1;

    }


    // ========================================
    // НАЗВАНИЯ ДНЕЙ
    // ========================================

    const dayNames = {

        monday: "Понедельник",
        tuesday: "Вторник",
        wednesday: "Среда",
        thursday: "Четверг",
        friday: "Пятница"

    };


    // ========================================
    // СОЗДАЁМ ДАТУ
    // ========================================

    const dateParts =
        dateKey.split("-");


    const date =
        new Date(
            Number(dateParts[0]),
            Number(dateParts[1]) - 1,
            Number(dateParts[2])
        );


    // ========================================
    // ОПРЕДЕЛЯЕМ РАСПИСАНИЕ
    // ========================================

    const weekNumber =
        getWeekNumber(date);


    let schedule;


    if (weekNumber % 2 === 1) {

        schedule = redSchedule;

    } else {

        schedule = blueSchedule;

    }


    // ========================================
    // ПОЛУЧАЕМ ЗАНЯТИЕ
    // ========================================

    const lesson =
        schedule[day]?.[lessonNumber];


    // ========================================
    // ПОЛУЧАЕМ ДАННЫЕ КОНКРЕТНОЙ ПАРЫ
    // ========================================

    const lessonDataKey =
        dateKey + "_" + lessonNumber;


    const data =
        lessonData[lessonDataKey] || {};


    // ========================================
    // ЕСЛИ ЗАНЯТИЕ НЕ НАЙДЕНО
    // ========================================

    if (!lesson) {

        document.getElementById("subject").textContent =
            "Занятие не найдено";

    } else {


        // ====================================
        // ПРЕДМЕТ
        // ====================================

        document.getElementById("subject").textContent =
            lesson.subject;


        // ====================================
        // ДАТА
        // ====================================

        document.getElementById("date").textContent =
            date.toLocaleDateString(
                "ru-RU",
                {
                    day: "2-digit",
                    month: "2-digit",
                    year: "numeric"
                }
            );


        // ====================================
        // ДЕНЬ
        // ====================================

        document.getElementById("day").textContent =
            dayNames[day];


        // ====================================
        // НОМЕР ПАРЫ
        // ====================================

        document.getElementById("lessonNumber").textContent =
            lessonNumber + " пара";


        // ====================================
        // ВРЕМЯ
        // ====================================

        document.getElementById("time").textContent =
            lessonTimes[lessonNumber];


        // ====================================
        // ТИП ЗАНЯТИЯ
        // ====================================

        document.getElementById("lessonType").textContent =
            lesson.type;


        // ====================================
        // ТЕМА
        // ====================================

        document.getElementById("topic").textContent =
            data.topic ||
            "Тема пока не добавлена.";


        // ====================================
        // ДОМАШНЕЕ ЗАДАНИЕ
        // ====================================

        document.getElementById("homework").textContent =
            data.homework ||
            "Домашнее задание пока не добавлено.";


        // ====================================
        // ДОКЛАДЧИК
        // ====================================

        document.getElementById("reportStudent").textContent =
            data.reportStudent ||
            "—";


        // ====================================
        // ТЕМА ДОКЛАДА
        // ====================================

        document.getElementById("reportTopic").textContent =
            data.reportTopic ||
            "—";


        // ====================================
        // АУДИТОРИЯ
        // ====================================

        document.getElementById("classroom").textContent =
            data.classroom ||
            "—";


        // ====================================
        // ПРЕПОДАВАТЕЛЬ
        // ====================================

        document.getElementById("teacher").textContent =
            data.teacher ||
            "—";


        // ====================================
        // ЗАМЕТКИ
        // ====================================

        document.getElementById("notes").textContent =
            data.notes ||
            "Заметок пока нет.";

            // ============================================
      // ВЫВОД МАТЕРИАЛОВ
      // ============================================

      // ============================================
        // ВЫВОД МАТЕРИАЛОВ
        // ============================================

        const materialsTable = document.getElementById("materialsTable");

        if (materialsTable) {
            if (data.materials && data.materials.length > 0) {
                let tableHTML = `
                    <tr>
                        <th>Название</th>
                        <th>Ссылка</th>
                    </tr>
                `;

                data.materials.forEach(item => {
                    tableHTML += `
                        <tr>
                            <td>${item.name}</td>
                            <td><a href="${item.url}" target="_blank">Открыть</a></td>
                        </tr>
                    `;
                });

                materialsTable.innerHTML = tableHTML;
            } else {
                materialsTable.innerHTML = `
                    <tr>
                        <th>Название</th>
                        <th>Ссылка</th>
                    </tr>
                    <tr>
                        <td>Материалы пока не добавлены</td>
                        <td>—</td>
                    </tr>
                `;
            }
        }

    }

}

}
