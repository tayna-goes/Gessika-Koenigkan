document.addEventListener("DOMContentLoaded", () => {

    // ==========================================================
    // CONFIGURAÇÕES
    // ==========================================================

    const WHATSAPP = "5518997765764";


    // ==========================================================
    // ELEMENTOS DO FORMULÁRIO
    // ==========================================================

    const form = document.querySelector("#eventForm");
    const dateInput = document.querySelector("#eventDate");
    const formation = document.querySelector("#formation");
    const errorBox = document.querySelector("#formError");


    // ==========================================================
    // DATA MÍNIMA DO EVENTO
    // ==========================================================

    if (dateInput) {

        const now = new Date();

        const today = [
            now.getFullYear(),
            String(now.getMonth() + 1).padStart(2, "0"),
            String(now.getDate()).padStart(2, "0")
        ].join("-");

        dateInput.min = today;
    }


    // ==========================================================
    // MODAL DO DESENVOLVEDOR
    // ==========================================================

    const developerModal =
        document.querySelector("#developerModal");

    const developerDataButton =
        document.querySelector("#developerDataButton");

    const developerModalClose =
        document.querySelector("#developerModalClose");

    const developerModalBackdrop =
        document.querySelector("[data-close-developer]");


    // ==========================================================
    // ABRIR MODAL
    // ==========================================================

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


    // ==========================================================
    // FECHAR MODAL
    // ==========================================================

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


    // ==========================================================
    // EVENTOS DO MODAL
    // ==========================================================

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


    // ==========================================================
    // FECHAR MODAL COM ESC
    // ==========================================================

    document.addEventListener("keydown", (event) => {

        if (
            event.key === "Escape" &&
            developerModal?.classList.contains("is-open")
        ) {
            closeDeveloperModal();
        }

    });


    // ==========================================================
    // NAVEGAÇÃO INTERNA
    // ==========================================================
    //
    // Os links continuam usando href="#id", porém:
    //
    // - a página rola suavemente;
    // - o #id NÃO é colocado na URL;
    // - não usamos history.pushState();
    //
    // ==========================================================

    document
        .querySelectorAll('a[href^="#"]')
        .forEach((link) => {

            link.addEventListener("click", (event) => {

                const href =
                    link.getAttribute("href");


                // --------------------------------------------------
                // Link vazio
                // --------------------------------------------------

                if (!href || href === "#") {
                    return;
                }


                // --------------------------------------------------
                // Modal do desenvolvedor
                // --------------------------------------------------

                if (href === "#desenvolvedor") {

                    event.preventDefault();

                    openDeveloperModal();

                    return;
                }


                // --------------------------------------------------
                // CONSULTAR DATA
                // --------------------------------------------------
                //
                // Vai diretamente para o formulário.
                // Depois coloca o foco no campo Nome.
                //
                // --------------------------------------------------

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


                    // Aguarda a animação do scroll
                    // antes de colocar o foco no campo.
                    setTimeout(() => {

                        const nameInput =
                            document.querySelector("#name");

                        if (nameInput) {
                            nameInput.focus();
                        }

                    }, 700);

                    return;
                }


                // --------------------------------------------------
                // Localizar seção
                // --------------------------------------------------

                const target =
                    document.querySelector(href);


                if (!target) {
                    return;
                }


                // --------------------------------------------------
                // Impede alteração da URL
                // --------------------------------------------------

                event.preventDefault();


                // --------------------------------------------------
                // Scroll suave
                // --------------------------------------------------

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            });

        });


    // ==========================================================
    // BOTÕES DOS PACOTES
    // ==========================================================

    document
        .querySelectorAll(".select-package")
        .forEach((button) => {

            button.addEventListener("click", () => {

                const packageName =
                    button.dataset.package || "";


                // --------------------------------------------------
                // Seleciona o pacote
                // --------------------------------------------------

                if (formation) {

                    formation.value =
                        packageName;

                }


                // --------------------------------------------------
                // Vai para o formulário
                // --------------------------------------------------

                const contactSection =
                    document.querySelector("#contato");


                if (!contactSection) {
                    return;
                }


                contactSection.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });


                // --------------------------------------------------
                // Foco no select do pacote
                // --------------------------------------------------

                setTimeout(() => {

                    if (formation) {
                        formation.focus();
                    }

                }, 700);

            });

        });


    // ==========================================================
    // FORMULÁRIO
    // ==========================================================

    if (
        form &&
        dateInput &&
        formation &&
        errorBox
    ) {

        const fields = [

            document.querySelector("#name"),

            document.querySelector("#eventType"),

            dateInput,

            formation

        ].filter(Boolean);


        // ------------------------------------------------------
        // Limpar erros
        // ------------------------------------------------------

        const clearInvalid = () => {

            fields.forEach((field) => {

                field.removeAttribute(
                    "aria-invalid"
                );

            });

            errorBox.textContent = "";

        };


        // ------------------------------------------------------
        // Limpar erros ao preencher
        // ------------------------------------------------------

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


        // ------------------------------------------------------
        // Envio do formulário
        // ------------------------------------------------------

        form.addEventListener(
            "submit",
            (event) => {

                event.preventDefault();

                clearInvalid();


                // ----------------------------------------------
                // Validação
                // ----------------------------------------------

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


                // ----------------------------------------------
                // Dados do formulário
                // ----------------------------------------------

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


                // ----------------------------------------------
                // Mensagem
                // ----------------------------------------------

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


                // ----------------------------------------------
                // URL do WhatsApp
                // ----------------------------------------------

                const url =
                    `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`;


                // ----------------------------------------------
                // Abrir WhatsApp
                // ----------------------------------------------

                window.open(
                    url,
                    "_blank",
                    "noopener,noreferrer"
                );

            }
        );

    }


    // ==========================================================
    // REVEAL — ANIMAÇÃO AO ENTRAR NA TELA
    // ==========================================================

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


    // ==========================================================
    // GALERIA + LIGHTBOX
    // ==========================================================

    const galleryItems =
        document.querySelectorAll(".gallery-item");

    const galleryLightbox =
        document.querySelector("#galleryLightbox");

    const galleryLightboxContent =
        document.querySelector("#galleryLightboxContent");

    const galleryLightboxClose =
        document.querySelector("#galleryLightboxClose");

    const galleryLightboxPrev =
        document.querySelector("#galleryLightboxPrev");

    const galleryLightboxNext =
        document.querySelector("#galleryLightboxNext");

    const galleryLightboxCounter =
        document.querySelector("#galleryLightboxCounter");

    const galleryLightboxBackdrop =
        document.querySelector("[data-close-gallery]");

    let currentGalleryIndex = 0;


    // ==========================================================
    // ABRIR
    // ==========================================================

    const openGallery = (index) => {

        if (!galleryLightbox || !galleryItems.length) {
            return;
        }

        currentGalleryIndex = index;

        renderGalleryItem();

        galleryLightbox.classList.add("is-open");

        galleryLightbox.setAttribute(
            "aria-hidden",
            "false"
        );

        document.body.style.overflow = "hidden";

        galleryLightboxClose?.focus();
    };


    // ==========================================================
    // RENDERIZAR ITEM
    // ==========================================================

    const renderGalleryItem = () => {

        const item =
            galleryItems[currentGalleryIndex];

        if (!item || !galleryLightboxContent) {
            return;
        }

        const type =
            item.dataset.type || "image";

        const src =
            item.dataset.src;

        galleryLightboxContent.innerHTML = "";


        // ----------------------------------------------------------
        // IMAGEM
        // ----------------------------------------------------------

        if (type === "image") {

            const image =
                document.createElement("img");

            image.src = src;

            image.alt =
                item.querySelector("img")?.alt ||
                "Imagem da galeria";

            galleryLightboxContent.appendChild(
                image
            );
        }


        // ----------------------------------------------------------
        // VÍDEO
        // ----------------------------------------------------------

        if (type === "video") {

            const video =
                document.createElement("video");

            video.src = src;

            video.controls = true;

            video.autoplay = true;

            video.playsInline = true;

            video.preload = "metadata";

            galleryLightboxContent.appendChild(
                video
            );

            video.play().catch(() => { });
        }


        // ----------------------------------------------------------
        // CONTADOR
        // ----------------------------------------------------------

        if (galleryLightboxCounter) {

            galleryLightboxCounter.textContent =
                `${currentGalleryIndex + 1} / ${galleryItems.length}`;
        }

    };


    // ==========================================================
    // FECHAR
    // ==========================================================

    const closeGallery = () => {

        if (!galleryLightbox) {
            return;
        }

        galleryLightbox.classList.remove(
            "is-open"
        );

        galleryLightbox.setAttribute(
            "aria-hidden",
            "true"
        );

        galleryLightboxContent.innerHTML = "";

        document.body.style.overflow = "";

    };


    // ==========================================================
    // PRÓXIMO
    // ==========================================================

    const nextGalleryItem = () => {

        currentGalleryIndex =
            (currentGalleryIndex + 1) %
            galleryItems.length;

        renderGalleryItem();
    };


    // ==========================================================
    // ANTERIOR
    // ==========================================================

    const previousGalleryItem = () => {

        currentGalleryIndex =
            (
                currentGalleryIndex -
                1 +
                galleryItems.length
            ) %
            galleryItems.length;

        renderGalleryItem();
    };


    // ==========================================================
    // CLIQUE NAS FOTOS
    // ==========================================================

    galleryItems.forEach(
        (item, index) => {

            item.addEventListener(
                "click",
                () => {

                    openGallery(index);

                }
            );

        }
    );


    // ==========================================================
    // CONTROLES
    // ==========================================================

    galleryLightboxClose?.addEventListener(
        "click",
        closeGallery
    );

    galleryLightboxBackdrop?.addEventListener(
        "click",
        closeGallery
    );

    galleryLightboxNext?.addEventListener(
        "click",
        nextGalleryItem
    );

    galleryLightboxPrev?.addEventListener(
        "click",
        previousGalleryItem
    );


    // ==========================================================
    // TECLADO
    // ==========================================================

    document.addEventListener(
        "keydown",
        (event) => {

            if (
                !galleryLightbox ||
                !galleryLightbox.classList.contains("is-open")
            ) {
                return;
            }


            if (event.key === "Escape") {

                closeGallery();

                return;
            }


            if (event.key === "ArrowRight") {

                nextGalleryItem();

                return;
            }


            if (event.key === "ArrowLeft") {

                previousGalleryItem();

            }

        }
    );

});
