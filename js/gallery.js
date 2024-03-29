"use strict";
! function () {
    function t(e) {
        if (++t.prototype._count < 2) {
            if (!document.head.querySelector('[width="device-width, initial-scale=1"]')) {
                var i = document.createElement("meta");
                i.name = "viewport", i.content = "width=device-width, initial-scale=1", document.head.appendChild(i)
            }
            if (!document.head.querySelector('[name="HandheldFriendly"]')) {
                var s = document.createElement("meta");
                s.name = "HandheldFriendly", s.content = "True", document.head.appendChild(s)
            }
            if (!document.head.querySelector('[href="lgallery.min.css"]')) {
                var l = document.createElement("link");
                l.rel = "stylesheet", l.href = "css/lgallery.min.css", document.head.appendChild(l)
            }
        }
        this._parent = e.parent, this._parent.style.position = "relative", this._options = e, void 0 != this._parent.dataset.lgallery && (this._src = this._parent.dataset.lgallery.split(","), this._type = "lgallery", this._parent.setAttribute("data-lgallery", "")), void 0 != this._parent.dataset.lgslider && (this._src = this._parent.dataset.lgslider.split(","), this._type = "lgslider", this._parent.setAttribute("data-lgslider", "")), void 0 != this._parent.dataset.lgpreview && (this._src = this._parent.dataset.lgpreview.split(","), this._type = "lgpreview", this._parent.setAttribute("data-lgpreview", "")), void 0 != this._parent.dataset.lgparent && (this._src = Array.prototype.slice.call(this._parent.querySelectorAll("img")), this._type = "lgparent", this._parent.setAttribute("data-lgparent", "")), void 0 != this._parent.dataset.lgcarusel && (this._src = this._parent.dataset.lgcarusel.split(","), this._type = "lgcarusel", "" == this._parent.dataset.lgcarusel && (this._src = this._parent.children, this._mod = "custom"), this._parent.setAttribute("data-lgcarusel", "")), this._options.tabletsrc && (this._tabletsrc = this._options.tabletsrc.split(",")), this._parent.dataset.lgtabletsrc && (this._tabletsrc = this._parent.dataset.lgtabletsrc.split(","), this._parent.removeAttribute("data-lgtabletsrc")), this._options.mobilesrc && (this._mobilesrc = this._options.mobilesrc.split(",")), this._parent.dataset.lgmobilesrc && (this._mobilesrc = this._parent.dataset.lgmobilesrc.split(","), this._parent.removeAttribute("data-lgmobilesrc")), this._options.alt && (this._alts = this._options.alt.split(",")), this._options.title && (this._titles = this._options.title.split(",")), this._parent.dataset.lgalt && (this._alts = this._parent.dataset.lgalt.split(","), this._parent.removeAttribute("data-lgalt")), this._parent.dataset.lgtitle && (this._titles = this._parent.dataset.lgtitle.split(","), this._parent.removeAttribute("data-lgtitle")), this._options.label && (this._labels = this._options.label.split(",")), this._parent.dataset.lglabel && (this._labels = this._parent.dataset.lglabel.split(","), this._parent.removeAttribute("data-lglabel")), this._options.description && (this._descriptions = this._options.description.split(",")), this._parent.dataset.lgdescription && (this._descriptions = this._parent.dataset.lgdescription.split(","), this._parent.removeAttribute("data-lgdescription")), this._options.openbtn && (this._openbtn = this._options.openbtn), void 0 != this._parent.dataset.lgopenbtn && (this._openbtn = this._parent.dataset.lgopenbtn, this._parent.removeAttribute("data-lgopenbtn")), this._options.noopenbtn && (this._noopenbtn = this._options.noopenbtn), void 0 != this._parent.dataset.lgnoopenbtn && (this._noopenbtn = this._parent.dataset.lgnoopenbtn, this._parent.removeAttribute("data-lgnoopenbtn")), void 0 != this._parent.dataset.lghover && (document.body.clientWidth > 1024 && (this._hover = +parseInt(this._parent.dataset.lghover)), this._parent.removeAttribute("data-lghover"), this._initialStyle = this._parent.getAttribute("style")), (this._options.width && "lgallery" == this._type || this._options.width && "lgparent" == this._type) && (this._width = this._options.width), (this._parent.dataset.lgwidth && "lgallery" == this._type || this._parent.dataset.lgwidth && "lgparent" == this._type) && (this._width = this._parent.dataset.lgwidth, this._parent.removeAttribute("data-lgwidth")), (this._options.height && "lgallery" == this._type || this._options.height && "lgparent" == this._type) && (this._height = this._options.height), (this._parent.dataset.lgheight && "lgallery" == this._type || this._parent.dataset.lgheight && "lgparent" == this._type) && (this._height = this._parent.dataset.lgheight, this._parent.removeAttribute("data-lgheight")), (this._options.noscale && "lgallery" == this._type || this._options.noscale && "lgparent" == this._type) && (this._noscale = this._options.noscale), (void 0 != this._parent.dataset.lgnoscale && "lgallery" == this._type || void 0 != this._parent.dataset.lgnoscale && "lgparent" == this._type) && (this._noscale = this._parent.dataset.lgnoscale, this._parent.removeAttribute("data-lgnoscale")), this._options.render && (this._render = this._options.render), void 0 != this._parent.dataset.lgrender && (this._render = this._parent.dataset.lgrender, this._parent.removeAttribute("data-lgrender")), this._options.atime && "lgcarusel" != this._type && (this._atime = this._options.atime), this._parent.dataset.lgatime && "lgcarusel" != this._type && (this._atime = this._parent.dataset.lgatime, this._parent.removeAttribute("data-lgatime")), this._options.autoplay && (this._autoplay = this._options.autoplay), this._parent.dataset.lgautoplay && (this._autoplay = this._parent.dataset.lgautoplay, this._parent.removeAttribute("data-lgautoplay")), "lgslider" != this._type && "lgpreview" != this._type || (this._keyboard = !0), this._margin = "0px", this._options.thumbsoffset && (this._margin = this._options.thumbsoffset), this._parent.dataset.lgthumbsoffset && (this._margin = this._parent.dataset.lgthumbsoffset, this._parent.removeAttribute("data-lgthumbsoffset")), this._options.thumbcontainer && (this._thumbcontainer = this._options.thumbcontainer), this._parent.dataset.lgthumbcontainer && (this._thumbcontainer = this._parent.dataset.lgthumbcontainer, this._parent.removeAttribute("data-lgthumbcontainer")), this._options.thumbheight && (this._thumbheight = this._options.thumbheight), this._parent.dataset.lgthumbheight && (this._thumbheight = this._parent.dataset.lgthumbheight, this._parent.removeAttribute("data-lgthumbheight")), this._options.thumbwidth && (this._thumbwidth = this._options.thumbwidth), this._parent.dataset.lgthumbwidth && (this._thumbwidth = this._parent.dataset.lgthumbwidth, this._parent.removeAttribute("data-lgthumbwidth")), this._options.thumbmargin && (this._thumbmargin = this._options.thumbmargin), this._parent.dataset.lgthumbmargin && (this._thumbmargin = this._parent.dataset.lgthumbmargin, this._parent.removeAttribute("data-lgthumbmargin")), this._options.showslides && (this._showslides = parseInt(this._options.showslides)), this._parent.dataset.lgshowslides && (this._showslides = parseInt(this._parent.dataset.lgshowslides), this._parent.removeAttribute("data-lgshowslides")), this._options.slidesperclick && (this._slidesperclick = parseInt(this._options.slidesperclick)), this._parent.dataset.lgslidesperclick && (this._slidesperclick = parseInt(this._parent.dataset.lgslidesperclick), this._parent.removeAttribute("data-lgslidesperclick")), this._options.margin && (this._slidesmargin = parseInt(this._options.margin)), this._parent.dataset.lgmargin && (this._slidesmargin = parseInt(this._parent.dataset.lgmargin), this._parent.removeAttribute("data-lgmargin")), this._options.width && (this._slidewidth = parseInt(this._options.width)), this._parent.dataset.lgwidth && (this._slidewidth = parseInt(this._parent.dataset.lgwidth), this._parent.removeAttribute("data-lgwidth")), this._createLink()
    }
    t.prototype._count = 0, t.prototype._createLink = function () {
        if ("lgallery" == this._type) {
            var t = document.createElement("span");
            t.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M304 192v32c0 6.6-5.4 12-12 12h-56v56c0 6.6-5.4 12-12 12h-32c-6.6 0-12-5.4-12-12v-56h-56c-6.6 0-12-5.4-12-12v-32c0-6.6 5.4-12 12-12h56v-56c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v56h56c6.6 0 12 5.4 12 12zm201 284.7L476.7 505c-9.4 9.4-24.6 9.4-33.9 0L343 405.3c-4.5-4.5-7-10.6-7-17V372c-35.3 27.6-79.7 44-128 44C93.1 416 0 322.9 0 208S93.1 0 208 0s208 93.1 208 208c0 48.3-16.4 92.7-44 128h16.3c6.4 0 12.5 2.5 17 7l99.7 99.7c9.3 9.4 9.3 24.6 0 34zM344 208c0-75.2-60.8-136-136-136S72 132.8 72 208s60.8 136 136 136 136-60.8 136-136z"/></svg>', t.className = "LGallery-OpenBtn", this._parent.appendChild(t), this._parent.onclick = this._initGallery.bind(this), this._openbtn && (t.addEventListener("click", this._initGallery.bind(this)), this._parent.onclick = null), this._noopenbtn && this._parent.removeChild(t)
        }
        if ("lgparent" == this._type)
            for (var e = 0; e < this._src.length; e++) this._src[e].addEventListener("click", this._initGallery.bind(this)), this._src[e].style.cursor = "pointer";
        "lgslider" == this._type && this._initGallery.call(this), "lgpreview" == this._type && this._initGallery.call(this), "lgcarusel" == this._type && (this._parent.contains(this._LGCarusel) || this._renderCarusel.call(this), this._renderCaruselSlider.call(this))
    }, t.prototype._initGallery = function (t) {
        var e = this;
        if ("lgslider" == this._type || "lgpreview" == this._type || !t.target.closest(".LGallery")) {
            "lgparent" == this._type && (this._clickedLink = t.target.closest("img")), "lgparent" == this._type && this._Counter && (this._Counter.innerHTML = this._src.indexOf(this._clickedLink) + 1 + " / " + this._src.length), "lgallery" == this._type && this._Counter && (this._Counter.innerHTML = "1 / " + this._src.length), this._labels && this._Label && ("lgallery" == this._type && (this._Label.classList.remove("LGallerySlider-Label_hidden"), this._Label.textContent = this._labels[0]), "lgparent" == this._type && (this._Label.textContent = this._labels[this._src.indexOf(this._clickedLink)])), this._descriptions && this._LabelDescription && ("lgallery" == this._type && (this._LabelDescription.textContent = this._descriptions[0]), "lgparent" == this._type && (this._LabelDescription.textContent = this._descriptions[this._src.indexOf(this._clickedLink)]), this._Label.appendChild(this._LabelDescription)), this._parent.contains(this._Gallery) || this._renderGallery.call(this), "lgallery" == this._type && this._hover && document.body.clientWidth > 1024 && (this._parent.style.transition = "all " + (this._hover ? this._hover / 1e3 : .1) + "s", this._parent.style.transform = "none", this._parent.style.boxShadow = "none"), "lgpreview" == this._type && this._renderPreviewBlock.call(this);
            for (var i = this._parent.querySelectorAll(".LGallery"), s = i.length; s > 1;) this._parent.removeChild(this._parent.lastElementChild.previousElementSibling), s--;
            setTimeout(function () {
                "lgslider" != e._type && "lgpreview" != e._type && (e._Gallery.classList.add("LGallery_open"), document.body.classList.add("LGalleryBody_hidden")), e._renderSlider.call(e)
            }, this._hover ? this._hover : 0)
        }
    }, t.prototype._renderGallery = function () {
        this._Gallery = document.createElement("div"), this._Gallery.classList.add("LGallery"), this._Close = document.createElement("span"), this._Close.classList.add("LGallery-CloseBtn"), this._Close.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512"><path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"/></svg>', this._Fullscreen = document.createElement("span"), this._Fullscreen.classList.add("LGallery-FullscreenBtn"), this._Fullscreen.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g id="background"><rect fill="none"/></g><g id="fullscreen"><path d="M20,8l8,8V8H20z M4,24h8l-8-8V24z"/><path d="M32,28V4H0v24h14v2H8v2h16v-2h-6v-2H32z M2,26V6h28v20H2z"/></g></svg>', this._Play = document.createElement("span"), this._Play.classList.add("LGallery-PlayBtn"), this._Play.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"/></svg>', this._Pause = document.createElement("span"), this._Pause.classList.add("LGallery-PauseBtn"), this._Pause.classList.add("LGallery-PauseBtn_hidden"), this._Pause.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M144 479H48c-26.5 0-48-21.5-48-48V79c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v352c0 26.5-21.5 48-48 48zm304-48V79c0-26.5-21.5-48-48-48h-96c-26.5 0-48 21.5-48 48v352c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48z"/></svg>', this._Counter = document.createElement("span"), this._Counter.classList.add("LGallery-Counter"), "lgallery" == this._type && (this._Counter.innerHTML = "1 / " + this._src.length), "lgparent" == this._type && (this._Counter.innerHTML = this._src.indexOf(this._clickedLink) + 1 + " / " + this._src.length), this._Menubar = document.createElement("span"), this._Menubar.classList.add("LGallery-Menubar"), this._Slider = document.createElement("div"), this._Slider.classList.add("LGallerySlider"), "lgslider" == this._type && this._Slider.classList.add("LGallerySlider_lgslider"), this._Label = document.createElement("div"), this._Label.classList.add("LGallerySlider-Label"), this._labels && ("lgparent" != this._type && (this._Label.textContent = this._labels[0], void 0 != this._labels[0] && "" != this._labels[0] || this._Label.classList.add("LGallerySlider-Label_hidden")), "lgparent" == this._type && (this._Label.textContent = this._labels[this._src.indexOf(this._clickedLink)])), this._LabelDescription = document.createElement("span"), this._LabelDescription.classList.add("LGallerySlider-LabelDescription"), this._descriptions && ("lgparent" != this._type && (this._LabelDescription.textContent = this._descriptions[0], void 0 != this._descriptions[0] && "" != this._descriptions[0] || this._Label.classList.add("LGallerySlider-Label_hidden")), "lgparent" == this._type && (this._LabelDescription.textContent = this._descriptions[this._src.indexOf(this._clickedLink)])), this._Label.appendChild(this._LabelDescription), this._SliderInner = document.createElement("div"), this._SliderInner.classList.add("LGallerySlider-Inner");
        for (var t = 0; t < this._src.length; t++)
            if (void 0 != this._src[t] && "" != this._src[t]) {
                var e = document.createElement("picture"),
                    i = document.createElement("img");
                if (i.classList.add("LGallerySlider-Slide"), "lgallery" == this._type && (i.src = this._src[t], i.alt = "LGallery slide " + t, 0 == t && i.classList.add("LGallerySlider-Slide_showing")), "lgparent" == this._type && (i.src = this._src[t].src, this._src[t].alt && (i.alt = this._src[t].alt), this._src[t].title && (i.title = this._src[t].title), t == this._src.indexOf(this._clickedLink) && i.classList.add("LGallerySlider-Slide_showing")), "lgslider" != this._type && "lgpreview" != this._type || (i.src = this._src[t], i.alt = "LGallery slide " + t, i.classList.add("LGallerySlider-Slide_lgslider"), 0 == t && i.classList.add("LGallerySlider-Slide_showing")), this._mobilesrc) {
                    var s = document.createElement("source");
                    s.media = "(max-width: " + this._mobilesrc[0] + ")", s.srcset = this._mobilesrc[t + 1], e.appendChild(s)
                }
                if (this._tabletsrc) {
                    var l = document.createElement("source");
                    l.media = "(max-width: " + this._tabletsrc[0] + ")", l.srcset = this._tabletsrc[t + 1], e.appendChild(l)
                }
                this._alts && (i.alt = this._alts[t]), this._titles && (i.title = this._titles[t]), e.appendChild(i), this._SliderInner.appendChild(e), i.ondragstart = function () {
                    return !1
                };
                var n = i.getAttribute("style");
                this._width && (i.setAttribute("style", (n ? n + ";" : "") + ";width: " + this._width + " !important"), n = i.getAttribute("style")), this._height && (i.setAttribute("style", (n ? n + ";" : "") + ";height: " + this._height + " !important"), n = i.getAttribute("style")), this._noscale && (i.setAttribute("style", (n ? n + ";" : "") + ";transform: translate(-50%, -50%) scale(1) !important"), n = i.getAttribute("style")), this._atime && (i.setAttribute("style", (n ? n + ";" : "") + ";transition: opacity " + .7 * parseInt(this._atime) + "s, transform " + this._atime + " !important"), n = i.getAttribute("style")), this._atime && (i.setAttribute("style", (n ? n + ";" : "") + ";transition: opacity " + this._atime + ", transform " + this._atime + " !important"), n = i.getAttribute("style"))
            } this._ButtonPrev = document.createElement("button"), this._ButtonPrev.className = "LGallerySlider-Button LGallerySlider-Button_prev", this._ButtonPrev.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path d="M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z"/></svg>', this._ButtonNext = document.createElement("button"), this._ButtonNext.className = "LGallerySlider-Button LGallerySlider-Button_next", this._ButtonNext.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"/></svg>', "lgallery" != this._type && "lgparent" != this._type || (this._Slider.appendChild(this._SliderInner), this._src.length > 1 && (this._Slider.appendChild(this._ButtonPrev), this._Slider.appendChild(this._ButtonNext)), this._Gallery.appendChild(this._Close), this._Gallery.appendChild(this._Fullscreen), this._Gallery.appendChild(this._Play), this._Gallery.appendChild(this._Pause), this._Gallery.appendChild(this._Counter), this._Gallery.appendChild(this._Menubar), (this._labels || this._descriptions) && this._Gallery.appendChild(this._Label), this._Gallery.appendChild(this._Slider), this._parent.appendChild(this._Gallery)), "lgslider" == this._type && (this._Slider.appendChild(this._SliderInner), this._src.length > 1 && (this._Slider.appendChild(this._ButtonPrev), this._Slider.appendChild(this._ButtonNext)), (this._labels || this._descriptions) && this._Slider.appendChild(this._Label), this._parent.appendChild(this._Slider))
    }, t.prototype._renderPreviewBlock = function () {
        this._LGPreview = document.createElement("div"), this._LGPreview.classList.add("LGSliderWithPreview"), this._LGThumbs = document.createElement("div"), this._LGThumbs.classList.add("LGSliderWithPreview-Thumbs"), this._LGThumbs.style.marginTop = this._margin, this._Slider.setAttribute("style", "height: calc(100% - " + this._margin + " - 50px) !important"), this._thumbcontainer && (this._LGThumbs.style.width = this._thumbcontainer), this._thumbheight && (this._LGThumbs.style.height = this._thumbheight, this._Slider.setAttribute("style", "height: calc(100% - " + this._margin + " - " + this._thumbheight + ") !important")), this._LGThumbsContainer = document.createElement("div"), this._LGThumbsContainer.classList.add("LGSliderWithPreview-ThumbsContainer");
        for (var t = 0; t < this._src.length; t++) {
            var e = document.createElement("img");
            e.classList.add("LGSliderWithPreview-Thumb"), e.src = this._src[t], this._LGThumbsContainer.appendChild(e), 0 == t && e.classList.add("LGSliderWithPreview-Thumb_active"), this._thumbwidth && (e.style.width = this._thumbwidth), this._thumbmargin && (e.style.margin = "0 " + this._thumbmargin)
        }
        this._LGThumbs.appendChild(this._LGThumbsContainer), this._Slider.appendChild(this._SliderInner), this._src.length > 1 && (this._Slider.appendChild(this._ButtonPrev), this._Slider.appendChild(this._ButtonNext)), (this._labels || this._descriptions) && this._Slider.appendChild(this._Label), this._LGPreview.appendChild(this._Slider), this._LGPreview.appendChild(this._LGThumbs), this._parent.appendChild(this._LGPreview)
    }, t.prototype._renderSlider = function () {
        function t(t) {
            "lgpreview" != N._type && (B[k].classList.remove("LGallerySlider-Slide_showing"), k = (t + B.length) % B.length, B[k].classList.add("LGallerySlider-Slide_showing"), N._Counter && (N._Counter.innerHTML = k + 1 + " / " + B.length)), "lgpreview" == N._type && (B[k].classList.remove("LGallerySlider-Slide_showing"), b[k].classList.remove("LGSliderWithPreview-Thumb_active"), k = t, t > B.length - 1 && (k = t - 1), t < 0 && (k = t + 1), B[k].classList.add("LGallerySlider-Slide_showing"), b[k].classList.add("LGSliderWithPreview-Thumb_active")), N._labels && (N._Label.classList.add("LGallerySlider-Label_hidden"), setTimeout(function () {
                N._Label.textContent = "", "" != N._labels[k] && void 0 != N._labels[k] && (N._Label.classList.remove("LGallerySlider-Label_hidden"), N._Label.textContent = N._labels[k])
            }, N._atime ? 1e3 * parseInt(N._atime) / 4 : 300)), N._descriptions && setTimeout(function () {
                N._LabelDescription.textContent = "", "" != N._descriptions[k] && void 0 != N._descriptions[k] && (N._Label.classList.remove("LGallerySlider-Label_hidden"), N._Label.appendChild(N._LabelDescription), N._LabelDescription.textContent = N._descriptions[k])
            }, N._atime ? 1e3 * parseInt(N._atime) / 4 : 300)
        }

        function e() {
            F.addEventListener("click", function (t) {
                G -= f + 2 * x, G < w && (G = w + 2 * x), w < 0 && (N._LGThumbs.firstElementChild.style.transform = "translateX(" + G + "px)")
            }), H.addEventListener("click", function (t) {
                G += +f + 2 * x, G > 0 && (G = 0), N._LGThumbs.firstElementChild.style.transform = "translateX(" + G + "px)"
            }), N._LGThumbs.onclick = function (t) {
                "IMG" == t.target.tagName && (t.clientX > C ? (G -= +f + 2 * x, G < w && (G = w + 2 * x), w < 0 && (N._LGThumbs.firstElementChild.style.transform = "translateX(" + G + "px)")) : t.clientX < C && (G += +f + 2 * x, G > 0 && (G = 0), this.firstElementChild.style.transform = "translateX(" + G + "px)"))
            };
            for (var e = function (e) {
                    b[e].onclick = function (i) {
                        t(e)
                    }
                }, i = 0; i < b.length; i++) e(i)
        }

        function i() {
            H.onclick = function (e) {
                t(k - 1), s(H)
            }, F.onclick = function (e) {
                t(k + 1), s(F)
            }
        }

        function s(t) {
            N._options.nobtns || void 0 == N._parent.dataset.lgnobtns && (t.classList.add("LGallerySlider-Button_clicked"), setTimeout(function () {
                t.classList.remove("LGallerySlider-Button_clicked")
            }, 220))
        }

        function l(e) {
            var i = N._parent.getBoundingClientRect().top >= -25,
                l = N._parent.getBoundingClientRect().bottom <= document.documentElement.clientHeight + 25;
            if ("lgallery" != N._type && "lgparent" != N._type || (i = N._Gallery.getBoundingClientRect().top >= -15, l = N._Gallery.getBoundingClientRect().bottom <= document.documentElement.clientHeight + 15), 37 == e.keyCode || 40 == e.keyCode) {
                if (N._keyboard && 40 == e.keyCode) return;
                i && l && (t(k - 1), s(H), "lgpreview" == N._type && (G += +f + 2 * x, G > 0 && (G = 0), N._LGThumbs.firstElementChild.style.transform = "translateX(" + G + "px)")), e.preventDefault()
            }
            if (39 == e.keyCode || 38 == e.keyCode) {
                if (N._keyboard && 38 == e.keyCode) return;
                i && l && (t(k + 1), s(F), "lgpreview" == N._type && (G -= +f + 2 * x, G < w && (G = w + 2 * x), w < 0 && (N._LGThumbs.firstElementChild.style.transform = "translateX(" + G + "px)"))), e.preventDefault()
            }
            27 == e.keyCode && (N._keyboard || v.call(N))
        }

        function n() {
            N._Play.classList.add("LGallery-PlayBtn_hidden"), N._Pause.classList.remove("LGallery-PauseBtn_hidden"), I = setInterval(function () {
                t(k + 1)
            }, M || 3e3)
        }

        function r() {
            N._Play.classList.remove("LGallery-PlayBtn_hidden"), N._Pause.classList.add("LGallery-PauseBtn_hidden"), clearInterval(I), I = null
        }

        function a(t) {
            t.target.closest(".LGallery-CloseBtn") && v.call(N), t.target.closest(".LGallery-PlayBtn") && n(), t.target.closest(".LGallery-PauseBtn") && r(), q || t.target.closest(".LGallerySlider-Slide") || t.target.closest(".LGallerySlider-Button") || t.target.closest(".LGallery-FullscreenBtn") || t.target.closest(".LGallery-PlayBtn") || t.target.closest(".LGallery-PauseBtn") || t.target.closest(".LGallery-Counter") || t.target.closest(".LGallerySlider-Label") || v.call(N)
        }

        function h() {
            W.x - P.x < -50 && (t(k + 1), "lgpreview" == N._type && (G -= f, G < w && (G = w), N._LGThumbs.firstElementChild.style.transform = "translateX(" + G + "px)")), W.x - P.x > 50 && (t(k - 1), "lgpreview" == N._type && (G += f, G > 0 && (G = 0), N._LGThumbs.firstElementChild.style.transform = "translateX(" + G + "px)"))
        }

        function o(t) {
            P.x = t.clientX, P.y = t.clientY
        }

        function d(t) {
            t.target.closest(".LGallerySlider-Label") || (W.x = t.clientX, W.y = t.clientY, h())
        }

        function _(t) {
            function e(t) {
                s(t)
            }

            function i(t) {
                n - t.clientY > 150 || n - t.clientY < -150 ? (v.call(N), setTimeout(function (t) {
                    l.style.top = "50%"
                }, 500)) : (l.classList.add("LGallerySlider-Slide_swiping"), l.style.top = "50%", setTimeout(function () {
                    l.classList.remove("LGallerySlider-Slide_swiping")
                }, 500)), document.removeEventListener("mousemove", e), document.removeEventListener("mouseup", i)
            }

            function s(t) {
                if (n - t.clientY > 50 || n - t.clientY < -50) {
                    var e = t.clientY - A - 54.5 + l.clientHeight / 2;
                    l.style.top = e + "px"
                }
            }
            if (!("ontouchstart" in document.documentElement || q)) {
                var l = t.target;
                if (!t.metaKey && !t.ctrlKey && 3 != t.which && l.classList.contains("LGallerySlider-Slide")) {
                    var n = t.clientY;
                    A = t.clientY - l.getBoundingClientRect().top, s(t), document.addEventListener("mousemove", e), document.addEventListener("mouseup", i), t.preventDefault()
                }
            }
        }

        function c(t) {
            P.x = t.changedTouches[0].pageX, P.y = t.changedTouches[0].pageY
        }

        function p(t) {
            W.x = t.changedTouches[0].pageX, W.y = t.changedTouches[0].pageY, h()
        }

        function u(t) {
            t.preventDefault()
        }

        function m(t) {
            function e(t) {
                s(t)
            }

            function i(t) {
                n - t.changedTouches[0].pageY > 100 || n - t.changedTouches[0].pageY < -100 ? (v.call(N), setTimeout(function (t) {
                    l.style.top = "50%"
                }, 500)) : (l.classList.add("LGallerySlider-Slide_swiping"), l.style.top = "50%", setTimeout(function () {
                    l.classList.remove("LGallerySlider-Slide_swiping")
                }, 500)), document.removeEventListener("touchmove", e), document.removeEventListener("touchend", i)
            }

            function s(t) {
                if (n - t.changedTouches[0].pageY > 50 || n - t.changedTouches[0].pageY < -50) {
                    var e = t.changedTouches[0].pageY - A - 22.5 + l.clientHeight / 2;
                    l.style.top = e + "px"
                }
            }
            if (!q) {
                var l = t.target;
                if (l.classList.contains("LGallerySlider-Slide")) {
                    var n = t.changedTouches[0].pageY;
                    A = t.changedTouches[0].pageY - l.getBoundingClientRect().top, s(t), document.addEventListener("touchmove", e), document.addEventListener("touchend", i)
                }
            }
        }

        function g() {
            document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement ? (document.cancelFullScreen ? document.cancelFullScreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitCancelFullScreen && document.webkitCancelFullScreen(), q = !1, L()) : (N._Gallery.requestFullscreen ? N._Gallery.requestFullscreen() : N._Gallery.mozRequestFullScreen ? N._Gallery.mozRequestFullScreen() : N._Gallery.webkitRequestFullscreen && N._Gallery.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT), q = !0, y())
        }

        function y(t) {
            var e, i, s = [N._ButtonPrev, N._ButtonNext, N._Fullscreen, N._Play, N._Pause];
            s.forEach(function (t) {
                t.onmouseenter = function (t) {
                    s.forEach(function (t) {
                        t.classList.remove("LGallery_hiddenBtns")
                    }), clearTimeout(i), clearTimeout(e)
                }, t.onmouseleave = function (t) {
                    e = setTimeout(function () {
                        s.forEach(function (t) {
                            t.classList.add("LGallery_hiddenBtns")
                        })
                    }, 7e3)
                }
            }), i = setTimeout(function () {
                s.forEach(function (t) {
                    t.classList.add("LGallery_hiddenBtns")
                })
            }, 7e3)
        }

        function L(t) {
            [N._ButtonPrev, N._ButtonNext, N._Fullscreen, N._Play, N._Pause].forEach(function (t) {
                t.classList.remove("LGallery_hiddenBtns"), t.onmouseenter = null, t.onmouseleave = null
            })
        }

        function v() {
            var t = this;
            this._Gallery.classList.remove("LGallery_open"), document.body.classList.remove("LGalleryBody_hidden"), document.removeEventListener("keydown", l), document.removeEventListener("click", a), this._Slider.removeEventListener("mousedown", o), this._Slider.removeEventListener("mouseup", d), document.removeEventListener("mousedown", _), this._Slider.removeEventListener("touchstart", c), this._Slider.removeEventListener("touchend", p), document.removeEventListener("touchstart", m), this._Gallery.removeEventListener("touchmove", u), this._Fullscreen.removeEventListener("click", g), L(), I && r(), I = null, B[k].classList.remove("LGallerySlider-Slide_showing"), "lgallery" == this._type && this._hover && setTimeout(function () {
                t._parent.setAttribute("style", t._initialStyle)
            }, 500), this._render && setTimeout(function () {
                t._parent.contains(t._Gallery) && t._parent.removeChild(t._Gallery)
            }, 300)
        }
        var b, G, f, C, w, S, x, E = this,
            B = this._Slider.querySelectorAll(".LGallerySlider-Slide");
        this._Slider.querySelectorAll(".LGallerySlider-Label");
        if ("lgpreview" == this._type) {
            if (document.body.clientWidth, b = this._LGThumbsContainer.querySelectorAll("img"), G = 0, f = 50, this._thumbwidth && (f = +parseInt(this._thumbwidth)), x = 0, this._thumbmargin && (x = +parseInt(this._thumbmargin)), S = 450, this._thumbcontainer) {
                switch (this._thumbcontainer.slice(-1)) {
                    case "x":
                        S = +parseInt(this._thumbcontainer);
                        break;
                    case "%":
                        S = this._parent.clientWidth * parseInt(this._thumbcontainer) / 100
                }
            }
            S > this._parent.clientWidth && (S = this._parent.clientWidth), this._LGThumbs.style.width = S + "px";
            var T = function () {
                var t;
                if (document.body.clientWidth > 1023) {
                    if (S = 450, E._thumbcontainer) {
                        switch (E._thumbcontainer.slice(-1)) {
                            case "x":
                                S = +parseInt(E._thumbcontainer);
                                break;
                            case "%":
                                S = E._parent.clientWidth * parseInt(E._thumbcontainer) / 100
                        }
                    }
                    S > E._parent.clientWidth && (S = E._parent.clientWidth), f = 50, E._thumbwidth && (f = +parseInt(E._thumbwidth));
                    for (var e = 0; e < b.length; e++) b[e].style.width = f + "px";
                    E._Slider.setAttribute("style", "height: calc(100% - " + E._margin + " - 50px) !important"), E._thumbheight && (E._LGThumbs.style.height = E._thumbheight, E._Slider.setAttribute("style", "height: calc(100% - " + E._margin + " - " + E._thumbheight + ") !important"))
                }
                if (document.body.clientWidth < 769) {
                    t = parseInt(getComputedStyle(E._LGThumbs).height), t > 100 && (t = 100), S > E._parent.clientWidth && (S = E._parent.clientWidth), f > 150 && (f = S / 4);
                    for (var i = 0; i < b.length; i++) b[i].style.width = f + "px";
                    E._LGThumbs.style.height = t + "px", E._Slider.setAttribute("style", "height: calc(100% - " + E._margin + " - " + t + "px) !important")
                }
                if (document.body.clientWidth < 415) {
                    t = parseInt(getComputedStyle(E._LGThumbs).height), t > 80 && (t = 80), f > 100 && (f = S / 3);
                    for (var s = 0; s < b.length; s++) b[s].style.width = f + "px";
                    E._LGThumbs.style.height = t + "px", E._Slider.setAttribute("style", "height: calc(100% - " + E._margin + " - " + t + "px) !important")
                }
            };
            T(), C = this._LGThumbs.getBoundingClientRect().left + S / 2, w = S - b.length * (f + 2 * x), window.addEventListener("resize", function () {
                T();
                var t;
                if (G == w + 2 * x && (t = 1), f = f, S = S, E._thumbcontainer) {
                    switch (E._thumbcontainer.slice(-1)) {
                        case "x":
                            S = +parseInt(E._thumbcontainer);
                            break;
                        case "%":
                            S = E._parent.clientWidth * parseInt(E._thumbcontainer) / 100
                    }
                }
                S > E._parent.clientWidth && (S = E._parent.clientWidth), E._LGThumbs.style.width = S + "px", w = S - b.length * (f + 2 * x), 1 == t && (G = w + 2 * x, N._LGThumbs.firstElementChild.style.transform = "translateX(" + G + "px)")
            }), w > 0 && (this._LGThumbs.firstElementChild.style.justifyContent = "center")
        }
        var k;
        "lgallery" != this._type && "lgslider" != this._type && "lgpreview" != this._type || (k = 0), "lgparent" == this._type && (k = this._src.indexOf(this._clickedLink)), B[k].classList.add("LGallerySlider-Slide_showing");
        var A, I, P = {},
            W = {},
            N = this,
            M = null;
        this._autoplay && (M = this._autoplay);
        var q, H = this._ButtonPrev,
            F = this._ButtonNext;
        if (i.call(this), this._Slider.addEventListener("mousedown", o), this._Slider.addEventListener("mouseup", d), "lgslider" != this._type && "lgpreview" != this._type && document.addEventListener("mousedown", _), this._Slider.addEventListener("touchstart", c), this._Slider.addEventListener("touchend", p), "lgslider" != this._type && "lgpreview" != this._type && document.addEventListener("touchstart", m), "lgslider" != this._type && "lgpreview" != this._type && this._Gallery.addEventListener("touchmove", u), document.addEventListener("keydown", l), "lgslider" != this._type && "lgpreview" != this._type && document.addEventListener("click", a), "lgslider" != this._type && "lgpreview" != this._type && this._Fullscreen.addEventListener("click", g), "lgpreview" == this._type && e(), "lgslider" == this._type && this._autoplay) {
            setInterval(function () {
                t(k + 1)
            }, M || 3e3)
        }
    }, t.prototype._renderCarusel = function () {
        if (this._parent.style.fontSize = "0", this._LGCarusel = document.createElement("div"), this._LGCarusel.classList.add("LGCarusel"), this._LGCaruselSlider = document.createElement("div"), this._LGCaruselSlider.classList.add("LGCarusel-Slider"), this._LGCaruselSliderInner = document.createElement("ul"), this._LGCaruselSliderInner.classList.add("LGCarusel-SliderInner"), "custom" != this._mod)
            for (var t = 0; t < this._src.length; t++) {
                var e = document.createElement("li");
                e.classList.add("LGCarusel-Slide");
                var i = document.createElement("picture"),
                    s = document.createElement("img");
                if (s.src = this._src[t], s.alt = "LGallery slide " + t, this._mobilesrc) {
                    var l = document.createElement("source");
                    l.media = "(max-width: " + this._mobilesrc[0] + ")", l.srcset = this._mobilesrc[t + 1], i.appendChild(l)
                }
                if (this._tabletsrc) {
                    var n = document.createElement("source");
                    n.media = "(max-width: " + this._tabletsrc[0] + ")", n.srcset = this._tabletsrc[t + 1], i.appendChild(n)
                }
                e.ondragstart = function () {
                    return !1
                }, this._options.alt && (this._alts = this._options.alt.split(","), s.setAttribute("alt", this._alts[t])), this._options.title && (this._titles = this._options.title.split(","), s.setAttribute("title", this._titles[t])), this._parent.dataset.lgalt && (this._alts = this._parent.dataset.lgalt.split(","), s.setAttribute("alt", this._alts[t])), this._parent.dataset.lgtitle && (this._titles = this._parent.dataset.lgtitle.split(","), s.setAttribute("title", this._titles[t])), i.appendChild(s), e.appendChild(i), this._LGCaruselSliderInner.appendChild(e)
            }
        if ("custom" == this._mod)
            for (var r = 0; r < this._src.length; r++) {
                var a = this._src[r];
                r--, a.classList.add("LGCarusel-Slide"), this._LGCaruselSliderInner.appendChild(a)
            }
        this._LGCaruselButtonPrev = document.createElement("button"), this._LGCaruselButtonPrev.className = "LGCarusel-Button LGCarusel-Button_prev", this._LGCaruselButtonPrev.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path d="M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z"/></svg>', this._LGCaruselButtonNext = document.createElement("button"), this._LGCaruselButtonNext.className = "LGCarusel-Button LGCarusel-Button_next", this._LGCaruselButtonNext.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"/></svg>', this._LGCaruselSlider.appendChild(this._LGCaruselSliderInner), this._LGCarusel.appendChild(this._LGCaruselSlider), this._LGCarusel.appendChild(this._LGCaruselButtonPrev), this._LGCarusel.appendChild(this._LGCaruselButtonNext), this._parent.appendChild(this._LGCarusel)
    }, t.prototype._renderCaruselSlider = function () {
        function t(t) {
            P.x = t.clientX, P.y = t.clientY, t.preventDefault()
        }

        function e(t) {
            W.x = t.clientX, W.y = t.clientY, N()
        }

        function i(t) {
            P.x = t.changedTouches[0].pageX, P.y = t.changedTouches[0].pageY
        }

        function s(t) {
            W.x = t.changedTouches[0].pageX, W.y = t.changedTouches[0].pageY, N()
        }
        var l = this,
            n = this._parent.querySelectorAll(".LGCarusel-Slide"),
            r = n.length,
            a = 2;
        this._showslides && (a = this._showslides);
        var h = 1;
        this._slidesperclick && (h = this._slidesperclick);
        var o = 0;
        this._slidesmargin && (o = this._slidesmargin);
        var d = 500;
        this._slidewidth && (d = this._slidewidth);
        var _ = a;
        c <= 0 && (c = 1), _ > r && (_ = r);
        var c = h;
        for (c <= 0 && (c = 1), c > _ && (c = _); r % c != 0;) c--;
        var p = 0,
            u = d,
            m = o,
            g = u + 2 * m,
            y = g * _ - 2 * m;
        this._LGCaruselSlider.style.width = y + "px";
        for (var L = 0; L < n.length; L++) n[L].style.margin = "0 " + m + "px", n[L].style.width = u + "px", n[L].style.minWidth = u + "px";
        for (var v = 1; v <= r; v++) {
            var b = n[n.length - v].cloneNode(!0);
            b.ondragstart = function () {
                return !1
            }, this._LGCaruselSliderInner.prepend(b)
        }
        for (var G = 0; G < r; G++) {
            var f = n[G].cloneNode(!0);
            f.ondragstart = function () {
                return !1
            }, this._LGCaruselSliderInner.append(f)
        }
        var C = g * r;
        this._LGCaruselSliderInner.style.transform = "translateX(-" + (C + m) + "px)";
        var w = 0,
            S = function () {
                if (document.body.clientWidth > 1170) {
                    for (_ = a, _ > r && (_ = r), c = h, c > _ && (c = _); r % c != 0;) c--;
                    m = o;
                    var t = 2 * parseInt(getComputedStyle(l._LGCarusel.parentNode).paddingLeft);
                    u = l._LGCarusel.parentNode.clientWidth / _ - 2 * o - t / _, l._LGCarusel.parentNode.clientWidth / _ - m > d && (u = d), g = u + 2 * m, y = g * _ - 2 * m, C = g * r, p = 0
                }
                if (document.body.clientWidth > 768 && document.body.clientWidth < 1171) {
                    for (_ = a, _ > r && (_ = r), _ > 4 && (_ = 4), c = h, c > _ && (c = _); r % c != 0;) c--;
                    m = o / 1.68;
                    var e = 2 * parseInt(getComputedStyle(l._LGCarusel.parentNode).paddingLeft);
                    u = l._LGCarusel.parentNode.clientWidth / _ - o - e / _, g = u + 2 * m, y = g * _ - 2 * m, C = g * r, p = 0
                }
                if (document.body.clientWidth > 450 && document.body.clientWidth < 769) {
                    for (_ = a, _ > r && (_ = r), _ > 2 && (_ = 2), c > _ && (c = _); r % c != 0;) c--;
                    m = o / 3;
                    var i = 2 * parseInt(getComputedStyle(l._LGCarusel.parentNode).paddingLeft);
                    u = (l._LGCarusel.parentNode.clientWidth - o) / _ - i / _, g = u + 2 * m, y = g * _ - 2 * m, C = g * r, p = 0
                }
                if (document.body.clientWidth < 450) {
                    _ = 1, c = 1, m = o / 4;
                    var s = 2 * parseInt(getComputedStyle(l._LGCarusel.parentNode).paddingLeft);
                    u = l._LGCarusel.parentNode.clientWidth - s / _, g = u + 2 * m, y = g * _ - 2 * m, C = g * r, p = 0
                }
                w = 0, l._LGCaruselSlider.style.width = y + "px";
                for (var n = l._parent.querySelectorAll(".LGCarusel-Slide"), L = 0; L < n.length; L++) n[L].style.margin = "0 " + m + "px", n[L].style.width = u + "px", n[L].style.minWidth = u + "px";
                l._LGCaruselSliderInner.style.transform = "translateX(-" + (C + m) + "px)", l._LGCaruselSliderInner.style.marginLeft = w + "px"
            };
        S();
        var x = function () {
            S()
        };
        window.addEventListener("resize", x), document.body.clientWidth < 1025 && (window.removeEventListener("resize", x), window.addEventListener("orientationchange", x));
        var E = function () {
                C += g * c, l._LGCaruselSliderInner.style.transform = "translateX(" + (-C - m) + "px)", p += c, p >= r && (w += g * n.length, l._LGCaruselSliderInner.style.marginLeft = w + "px", p = 0), l._LGCaruselSliderInner.classList.add("LGCarusel-SliderInner_sliding"), setTimeout(function () {
                    l._LGCaruselSliderInner.classList.remove("LGCarusel-SliderInner_sliding")
                }, 500)
            },
            B = function () {
                C -= g * c, l._LGCaruselSliderInner.style.transform = "translateX(" + (-C - m) + "px)", p -= c, p <= -r && (w -= g * n.length, l._LGCaruselSliderInner.style.marginLeft = w + "px", p = 0), l._LGCaruselSliderInner.classList.add("LGCarusel-SliderInner_sliding"), setTimeout(function () {
                    l._LGCaruselSliderInner.classList.remove("LGCarusel-SliderInner_sliding")
                }, 500)
            },
            T = function (t) {
                l._options.nobtns || void 0 == l._parent.dataset.lgnobtns && (t.classList.add("LGCarusel-Button_clicked"), setTimeout(function () {
                    t.classList.remove("LGCarusel-Button_clicked")
                }, 220))
            };
        this._LGCaruselButtonNext.onclick = function (t) {
            E(), T(l._LGCaruselButtonNext)
        }, this._LGCaruselButtonPrev.onclick = function (t) {
            B(), T(l._LGCaruselButtonPrev)
        };
        var k, A = null;
        this._autoplay && (A = this._autoplay), this._autoplay && (k = setInterval(function () {
            E()
        }, A || 3e3)), this._LGCarusel.addEventListener("mouseenter", function () {
            clearInterval(k)
        }), this._LGCarusel.addEventListener("mouseleave", function () {
            l._autoplay && (k = setInterval(function () {
                E()
            }, A || 3e3))
        });
        var I = function (t) {
            var e = l._parent.getBoundingClientRect().top >= -25,
                i = l._parent.getBoundingClientRect().bottom <= document.documentElement.clientHeight + 25;
            37 == t.keyCode && (e && i && (B(), T(l._LGCaruselButtonPrev)), t.preventDefault()), 39 == t.keyCode && (e && i && (E(), T(l._LGCaruselButtonNext)), t.preventDefault())
        };
        document.addEventListener("keydown", I);
        var P = {},
            W = {};
        this._LGCarusel.addEventListener("mousedown", t), this._LGCarusel.addEventListener("mouseup", e), this._LGCarusel.addEventListener("touchstart", i), this._LGCarusel.addEventListener("touchend", s);
        var N = function () {
            W.x - P.x < -100 && E(), W.x - P.x > 100 && B()
        }
    }, t.prototype._lgalleryoption = {}, t.prototype._lgparentoption = {}, t.prototype._lgslideroption = {}, t.prototype._lgpreviewoption = {}, t.prototype._lgcaruseloption = {}, window.setLG = function (e, i) {
        "lgallery" == e && (t.prototype._lgalleryoption = i), "lgparent" == e && (t.prototype._lgparentoption = i), "lgslider" == e && (t.prototype._lgslideroption = i), "lgpreview" == e && (t.prototype._lgpreviewoption = i), "lgcarusel" == e && (t.prototype._lgcaruseloption = i)
    }, window.createLG = function (e, i) {
        var s = {};
        if (s.parent = e, i)
            for (var l in i) s[l] = i[l];
        if (!e.querySelectorAll(".LGallery").length) return new t(s)
    }, window.initLG = function () {
        for (var e = [], i = document.querySelectorAll("[data-lgallery]"), s = 0; s < i.length; s++) {
            t.prototype._lgalleryoption.parent = i[s];
            if (i[s].querySelectorAll(".LGallery").length) return;
            var l = new t(t.prototype._lgalleryoption);
            e.push(l)
        }
        for (var n = document.querySelectorAll("[data-lgparent]"), r = 0; r < n.length; r++) {
            t.prototype._lgparentoption.parent = n[r];
            if (n[r].querySelectorAll(".LGallery").length) return;
            var a = new t(t.prototype._lgparentoption);
            e.push(a)
        }
        for (var h = document.querySelectorAll("[data-lgslider]"), o = 0; o < h.length; o++) {
            t.prototype._lgslideroption.parent = h[o];
            if (h[o].querySelectorAll(".LGallerySlider").length) return;
            var d = new t(t.prototype._lgslideroption);
            e.push(d)
        }
        for (var _ = document.querySelectorAll("[data-lgpreview]"), c = 0; c < _.length; c++) {
            t.prototype._lgpreviewoption.parent = _[c];
            if (_[c].querySelectorAll(".LGallerySlider").length) return;
            var p = new t(t.prototype._lgpreviewoption);
            e.push(p)
        }
        for (var u = document.querySelectorAll("[data-lgcarusel]"), m = 0; m < u.length; m++) {
            t.prototype._lgcaruseloption.parent = u[m];
            if (u[m].querySelectorAll(".LGallery").length) return;
            var g = new t(t.prototype._lgcaruseloption);
            e.push(g)
        }
        return e
    }
}();