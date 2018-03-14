var production = true; // false = development, true = production

var requestedLang,
    lang,
    options = {
        fallbackLng: false,
        debug: !production, // development only
        detectLngQS: "lang", // use ?lang=... instead of ?setLng=...
        cookieName: "lang", // use cookie "lang" instead of "i18next"
        useLocalStorage: !!production, // production only
        localStorageExpirationTime: 3 * 24 * 60 * 60 * 1000 // cache 3 days
    },
    i18nLoaded = new $.Deferred();

i18n.init(options)
    .done(function () {
        $(document).i18n({
            twitter: "<a href='https://twitter.com/studentify'>Twitter</a>",
            googlePlus: "<a href='https://plus.google.com/115365194873502050036/posts'>Google+</a>"
        });

        var title = i18n.t($("head title").data("i18n"), { defaultValue: "" });
        if (title) {
            document.title = title;
        }
    })
    .always(function () {
        lang = i18n.t("lang", { defaultValue: "en" });
        $("html").attr("lang", lang);
        i18nLoaded.resolve();
    });
requestedLang = lang = i18n.lng();
