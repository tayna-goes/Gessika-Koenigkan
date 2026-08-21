document.addEventListener("DOMContentLoaded", () => {
    const WHATSAPP  = "5518997765764";
    const form      = document.querySelector("#eventForm");
    const dateInput = document.querySelector("#eventDate");
    const formation = document.querySelector("#formation");
    const errorBox  = document.querySelector("#formError");


    if (dateInput) {
        const now = new Date();
        const today = [
            now.getFullYear(),
            String(now.getMonth() + 1).padStart(2, "0"),
            String(now.getDate()).padStart(2, "0")
        ].join("-");
        dateInput.min = today;
    }

    const developerModal         = document.querySelector("#developerModal");
    const developerDataButton    = document.querySelector("#developerDataButton");
    const developerModalClose    = document.querySelector("#developerModalClose");
    const developerModalBackdrop = document.querySelector("[data-close-developer]");

    const openDeveloperModal = () => {
        if (!developerModal) {
            return;
        }
        developerModal.classList.add("is-open");
        developerModal.setAttribute(
            "aria-hidden",
            "false"
        );
        document.body.style.overflow = "hidden";
        setTimeout(() => {
            if (developerModalClose) {
                developerModalClose.focus();
            }
        }, 50);
    };

    const closeDeveloperModal = () => {
        if (!developerModal) {
            return;
        }
        developerModal.classList.remove("is-open");
        developerModal.setAttribute(
            "aria-hidden",
            "true"
        );
        document.body.style.overflow = "";
        if (developerDataButton) {
            developerDataButton.focus();
        }
    };

    developerDataButton?.addEventListener(
        "click",
        openDeveloperModal
    );

    developerModalClose?.addEventListener(
        "click",
        closeDeveloperModal
    );

    developerModalBackdrop?.addEventListener(
        "click",
        closeDeveloperModal
    );


    document.addEventListener("keydown", (event) => {
        if (
            event.key === "Escape" &&
            developerModal?.classList.contains("is-open")
        ) {
            closeDeveloperModal();
        }
    });

    document.querySelectorAll('a[href^="#"]').forEach((link) => {
            link.addEventListener("click", (event) => {
                const href =
                    link.getAttribute("href");

                if (!href || href === "#") {
                    return;
                }

                if (href === "#desenvolvedor") {
                    event.preventDefault();
                    openDeveloperModal();
                    return;
                }

                if (href === "#contato") {
                    event.preventDefault();
                    const contactSection =
                        document.querySelector("#contato");

                    if (!contactSection) {
                        return;
                    }

                    contactSection.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });


                    setTimeout(() => {

                        const nameInput =
                            document.querySelector("#name");

                        if (nameInput) {
                            nameInput.focus();
                        }

                    }, 700);

                    return;
                }

                const target = document.querySelector(href);

                if (!target) {
                    return;
                }

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            });

        });

    document
        .querySelectorAll(".select-package")
        .forEach((button) => {

            button.addEventListener("click", () => {

                const packageName =
                    button.dataset.package || "";


                if (formation) {
                    formation.value =
                        packageName;

                }

                const contactSection =
                    document.querySelector("#contato");


                if (!contactSection) {
                    return;
                }


                contactSection.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });


                setTimeout(() => {

                    if (formation) {
                        formation.focus();
                    }

                }, 700);

            });

        });


    if (form && dateInput && formation && errorBox ) {

        const fields = [

            document.querySelector("#name"),

            document.querySelector("#eventType"),

            dateInput,

            formation

        ].filter(Boolean);

        const clearInvalid = () => {

            fields.forEach((field) => {

                field.removeAttribute(
                    "aria-invalid"
                );

            });

            errorBox.textContent = "";

        };

        fields.forEach((field) => {

            field.addEventListener(
                "input",
                clearInvalid
            );

            field.addEventListener(
                "change",
                clearInvalid
            );

        });

        form.addEventListener(
            "submit",
            (event) => {

                event.preventDefault();

                clearInvalid();

                if (!form.checkValidity()) {

                    const invalidFields =
                        fields.filter(
                            (field) =>
                                !field.checkValidity()
                        );


                    invalidFields.forEach(
                        (field) => {

                            field.setAttribute(
                                "aria-invalid",
                                "true"
                            );

                        }
                    );


                    errorBox.textContent =
                        "Confira os campos destacados antes de continuar.";


                    if (invalidFields[0]) {

                        invalidFields[0].focus();

                    }

                    return;
                }

                const name =
                    document
                        .querySelector("#name")
                        ?.value
                        .trim() || "";


                const eventType =
                    document
                        .querySelector("#eventType")
                        ?.value
                        .trim() || "";


                const date =
                    new Date(
                        `${dateInput.value}T12:00:00`
                    );


                const formattedDate =
                    date.toLocaleDateString(
                        "pt-BR"
                    );


                const selectedPackage =
                    formation.value.trim();


                const message = [

                    "Oi! Desejo contratar a equipe para o meu evento.",

                    "",

                    `Nome: ${name}`,

                    `Tipo de evento: ${eventType}`,

                    `Data do evento: ${formattedDate}`,

                    `Pacote desejado: ${selectedPackage}`,

                    "",

                    `Gostaria de verificar a disponibilidade da data ${formattedDate} e receber mais informações sobre a contratação.`

                ].join("\n");

                const url =
                    `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`;

                window.open(
                    url,
                    "_blank",
                    "noopener,noreferrer"
                );

            }
        );

    }


    const revealItems =
        document.querySelectorAll(".reveal");


    if (
        revealItems.length &&
        "IntersectionObserver" in window
    ) {

        const observer =
            new IntersectionObserver(
                (entries, obs) => {

                    entries.forEach(
                        (entry) => {

                            if (
                                entry.isIntersecting
                            ) {

                                entry.target.classList.add(
                                    "visible"
                                );

                                obs.unobserve(
                                    entry.target
                                );

                            }

                        }
                    );

                },
                {
                    threshold: 0.12
                }
            );


        revealItems.forEach(
            (item) => {

                observer.observe(item);

            }
        );

    } else {

        revealItems.forEach(
            (item) => {

                item.classList.add(
                    "visible"
                );

            }
        );

    }

});

document.addEventListener("DOMContentLoaded", () => {

    const galleryItems =
        document.querySelectorAll(".gallery-item");

    const lightbox =
        document.querySelector("#galleryLightbox");

    const lightboxContent =
        document.querySelector("#galleryLightboxContent");

    const closeButton =
        document.querySelector("#galleryLightboxClose");

    const previousButton =
        document.querySelector("#galleryLightboxPrev");

    const nextButton =
        document.querySelector("#galleryLightboxNext");

    const backdrop =
        document.querySelector("[data-close-gallery]");

    const counter =
        document.querySelector("#galleryLightboxCounter");


    if (
        !galleryItems.length ||
        !lightbox ||
        !lightboxContent
    ) {
        return;
    }

    let currentIndex = 0;

    const renderItem = () => {

        const item =
            galleryItems[currentIndex];

        if (!item) {
            return;
        }


        const type =
            item.dataset.type || "image";

        const source =
            item.dataset.src;


        // Limpa conteúdo anterior
        lightboxContent.innerHTML = "";

        if (type === "image") {

            const image =
                document.createElement("img");

            image.src = source;

            image.alt =
                item.querySelector("img")?.alt ||
                "Imagem da galeria";

            image.loading = "eager";

            lightboxContent.appendChild(
                image
            );

        }

        if (type === "video") {

            const video =
                document.createElement("video");

            video.src = source;

            video.controls = true;

            video.autoplay = true;

            video.playsInline = true;

            video.preload = "metadata";

            video.setAttribute(
                "playsinline",
                ""
            );

            video.setAttribute(
                "webkit-playsinline",
                ""
            );

            lightboxContent.appendChild(
                video
            );


            // Alguns navegadores bloqueiam
            // autoplay. Nesse caso o usuário
            // poderá apertar play.

            video.play().catch(() => { });

        }

        if (counter) {

            counter.textContent =
                `${currentIndex + 1} / ${galleryItems.length}`;

        }

    };

    const openLightbox = (index) => {

        currentIndex = index;

        renderItem();

        lightbox.classList.add("is-open");

        lightbox.setAttribute(
            "aria-hidden",
            "false"
        );

        document.body.style.overflow = "hidden";

        closeButton?.focus();

    };

    const closeLightbox = () => {

        lightbox.classList.remove("is-open");

        lightbox.setAttribute(
            "aria-hidden",
            "true"
        );


        // Remove o vídeo da página.
        // Isso também interrompe a reprodução.

        lightboxContent.innerHTML = "";


        document.body.style.overflow = "";

    };

    const nextItem = () => {

        currentIndex =
            (currentIndex + 1) %
            galleryItems.length;

        renderItem();

    };


    const previousItem = () => {

        currentIndex =
            (
                currentIndex -
                1 +
                galleryItems.length
            ) %
            galleryItems.length;

        renderItem();

    };

    galleryItems.forEach(
        (item, index) => {

            item.addEventListener(
                "click",
                () => {

                    openLightbox(index);

                }
            );

        }
    );

    closeButton?.addEventListener(
        "click",
        closeLightbox
    );


    backdrop?.addEventListener(
        "click",
        closeLightbox
    );

    nextButton?.addEventListener(
        "click",
        (event) => {

            event.stopPropagation();

            nextItem();

        }
    );

    previousButton?.addEventListener(
        "click",
        (event) => {

            event.stopPropagation();

            previousItem();

        }
    );

    document.addEventListener(
        "keydown",
        (event) => {

            if (
                !lightbox.classList.contains("is-open")
            ) {
                return;
            }


            // ESC
            if (event.key === "Escape") {

                closeLightbox();

                return;
            }


            // Direita
            if (event.key === "ArrowRight") {

                nextItem();

                return;
            }


            // Esquerda
            if (event.key === "ArrowLeft") {

                previousItem();

            }

        }
    );

});
