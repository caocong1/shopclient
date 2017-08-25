/*!
 * Ace v1.4.0
 */
if("undefined" == typeof jQuery) throw new Error("Ace's JavaScript requires jQuery");
! function(a, b) {
	var c = function(b, c) {
		function d(a) {
			a.preventDefault(), a.stopPropagation();
			var b = A.offset(),
				c = b[o],
				d = u ? a.pageY : a.pageX;
			d > c + G ? (G = d - c - F + I, G > H && (G = H)) : (G = d - c - I, 0 > G && (G = 0)), l.update_scroll()
		}

		function e(b) {
			b.preventDefault(), b.stopPropagation(), ba = aa = u ? b.pageY : b.pageX, Q = !0, a("html").off("mousemove.ace_scroll").on("mousemove.ace_scroll", f), a(R).off("mouseup.ace_scroll").on("mouseup.ace_scroll", g), A.addClass("active"), S && l.$element.trigger("drag.start")
		}

		function f(a) {
			a.preventDefault(), a.stopPropagation(), ba = u ? a.pageY : a.pageX, ba - aa + G > H ? ba = aa + H - G : 0 > ba - aa + G && (ba = aa - G), G += ba - aa, aa = ba, 0 > G ? G = 0 : G > H && (G = H), l.update_scroll()
		}

		function g(b) {
			b.preventDefault(), b.stopPropagation(), Q = !1, a("html").off(".ace_scroll"), a(R).off(".ace_scroll"), A.removeClass("active"), S && l.$element.trigger("drag.end"), w && W && !Y && i()
		}

		function h(a) {
			var b = +new Date;
			if(Z && b - da > 1e3) {
				var c = z[t];
				$ != c && ($ = c, _ = !0, l.reset(!0)), da = b
			}
			w && W && (null != ca && (clearTimeout(ca), ca = null), A.addClass("not-idle"), Y || 1 != a || i())
		}

		function i() {
			null != ca && (clearTimeout(ca), ca = null), ca = setTimeout(function() {
				ca = null, A.removeClass("not-idle")
			}, X)
		}

		function j() {
			A.css("visibility", "hidden").addClass("scroll-hover"), N = u ? parseInt(A.outerWidth()) || 0 : parseInt(A.outerHeight()) || 0, A.css("visibility", "").removeClass("scroll-hover")
		}

		function k() {
			if(V !== !1) {
				var a = y.offset(),
					b = a.left,
					c = a.top;
				u ? M || (b += y.outerWidth() - N) : M || (c += y.outerHeight() - N), V === !0 ? A.css({
					top: parseInt(c),
					left: parseInt(b)
				}) : "left" === V ? A.css("left", parseInt(b)) : "top" === V && A.css("top", parseInt(c))
			}
		}
		var l = this,
			m = ace.helper.getAttrSettings(b, a.fn.ace_scroll.defaults),
			n = a.extend({}, a.fn.ace_scroll.defaults, c, m);
		this.size = 0, this.lock = !1, this.lock_anyway = !1, this.$element = a(b), this.element = b;
		var o, p, q, r, s, t, u = !0,
			v = !1,
			w = !1,
			x = !1,
			y = null,
			z = null,
			A = null,
			B = null,
			C = null,
			D = null,
			E = null,
			F = 0,
			G = 0,
			H = 0,
			I = 0,
			J = !0,
			K = !1,
			L = "",
			M = !1,
			N = 0,
			O = 1,
			P = !1,
			Q = !1,
			R = "onmouseup" in window ? window : "html",
			S = n.dragEvent || !1,
			T = c.scrollEvent || !1,
			U = n.detached || !1,
			V = n.updatePos || !1,
			W = n.hideOnIdle || !1,
			X = n.hideDelay || 1500,
			Y = !1,
			Z = n.observeContent || !1,
			$ = 0,
			_ = !0;
		this.ref = function() {
			return this
		}, this.create = function(b) {
			if(!x) {
				b && (n = a.extend({}, a.fn.ace_scroll.defaults, b)), this.size = parseInt(this.$element.attr("data-size")) || n.size || 200, u = !n.horizontal, o = u ? "top" : "left", p = u ? "height" : "width", q = u ? "maxHeight" : "maxWidth", r = u ? "clientHeight" : "clientWidth", s = u ? "scrollTop" : "scrollLeft", t = u ? "scrollHeight" : "scrollWidth", this.$element.addClass("ace-scroll"), "static" == this.$element.css("position") ? (P = this.element.style.position, this.element.style.position = "relative") : P = !1;
				var c = null;
				U ? c = a('<div class="scroll-track scroll-detached"><div class="scroll-bar"></div></div>').appendTo("body") : (this.$element.wrapInner('<div class="scroll-content" />'), this.$element.prepend('<div class="scroll-track"><div class="scroll-bar"></div></div>')), y = this.$element, U || (y = this.$element.find(".scroll-content").eq(0)), u || y.wrapInner("<div />"), z = y.get(0), U ? (A = c, k()) : A = this.$element.find(".scroll-track").eq(0), B = A.find(".scroll-bar").eq(0), C = A.get(0), D = B.get(0), E = D.style, u || A.addClass("scroll-hz"), n.styleClass && (L = n.styleClass, A.addClass(L), M = !!L.match(/scroll\-left|scroll\-top/)), 0 == N && (A.show(), j()), A.hide(), A.on("mousedown", d), B.on("mousedown", e), y.on("scroll", function() {
					J && (G = parseInt(Math.round(this[s] * O)), E[o] = G + "px"), J = !1, T && this.$element.trigger("scroll", [z])
				}), n.mouseWheel && (this.lock = n.mouseWheelLock, this.lock_anyway = n.lockAnyway, this.$element.on(a.event.special.mousewheel ? "mousewheel.ace_scroll" : "mousewheel.ace_scroll DOMMouseScroll.ace_scroll", function(b) {
					if(!v) {
						if(h(!0), !w) return !l.lock_anyway;
						Q && (Q = !1, a("html").off(".ace_scroll"), a(R).off(".ace_scroll"), S && l.$element.trigger("drag.end")), b.deltaY = b.deltaY || 0;
						var c = b.deltaY > 0 || b.originalEvent.detail < 0 || b.originalEvent.wheelDelta > 0 ? 1 : -1,
							d = !1,
							e = z[r],
							f = z[s];
						l.lock || (d = -1 == c ? z[t] <= f + e : 0 == f), l.move_bar(!0);
						var g = parseInt(e / 8);
						return 80 > g && (g = 80), g > l.size && (g = l.size), g += 1, z[s] = f - c * g, d && !l.lock_anyway
					}
				}));
				var f = ace.vars.touch && "ace_drag" in a.event.special && n.touchDrag;
				if(f) {
					var g = "",
						m = f ? "ace_drag" : "swipe";
					this.$element.on(m + ".ace_scroll", function(a) {
						if(v) return void(a.retval.cancel = !0);
						if(h(!0), !w) return void(a.retval.cancel = this.lock_anyway);
						if(g = a.direction, u && ("up" == g || "down" == g) || !u && ("left" == g || "right" == g)) {
							var b = u ? a.dy : a.dx;
							0 != b && (Math.abs(b) > 20 && f && (b = 2 * b), l.move_bar(!0), z[s] = z[s] + b)
						}
					})
				}
				W && A.addClass("idle-hide"), Z && A.on("mouseenter.ace_scroll", function() {
					Y = !0, h(!1)
				}).on("mouseleave.ace_scroll", function() {
					Y = !1, 0 == Q && i()
				}), this.$element.on("mouseenter.ace_scroll touchstart.ace_scroll", function(a) {
					_ = !0, Z ? h(!0) : n.hoverReset && l.reset(!0), A.addClass("scroll-hover")
				}).on("mouseleave.ace_scroll touchend.ace_scroll", function() {
					A.removeClass("scroll-hover")
				}), u || y.children(0).css(p, this.size), y.css(q, this.size), v = !1, x = !0
			}
		}, this.is_active = function() {
			return w
		}, this.is_enabled = function() {
			return !v
		}, this.move_bar = function(a) {
			J = a
		}, this.get_track = function() {
			return C
		}, this.reset = function(a) {
			if(!v) {
				x || this.create();
				var b = this.size;
				if(!a || _) {
					if(_ = !1, U) {
						var c = parseInt(Math.round((parseInt(y.css("border-top-width")) + parseInt(y.css("border-bottom-width"))) / 2.5));
						b -= c
					}
					var d = u ? z[t] : b;
					if(u && 0 == d || !u && 0 == this.element.scrollWidth) return void A.removeClass("scroll-active");
					var e = u ? b : z.clientWidth;
					u || y.children(0).css(p, b), y.css(q, this.size), d > e ? (w = !0, A.css(p, e).show(), O = parseFloat((e / d).toFixed(5)), F = parseInt(Math.round(e * O)), I = parseInt(Math.round(F / 2)), H = e - F, G = parseInt(Math.round(z[s] * O)), E[p] = F + "px", E[o] = G + "px", A.addClass("scroll-active"), 0 == N && j(), K || (n.reset && (z[s] = 0, E[o] = 0), K = !0), U && k()) : (w = !1, A.hide(), A.removeClass("scroll-active"), y.css(q, ""))
				}
			}
		}, this.disable = function() {
			z[s] = 0, E[o] = 0, v = !0, w = !1, A.hide(), this.$element.addClass("scroll-disabled"), A.removeClass("scroll-active"), y.css(q, "")
		}, this.enable = function() {
			v = !1, this.$element.removeClass("scroll-disabled")
		}, this.destroy = function() {
			w = !1, v = !1, x = !1, this.$element.removeClass("ace-scroll scroll-disabled scroll-active"), this.$element.off(".ace_scroll"), U || (u || y.find("> div").children().unwrap(), y.children().unwrap(), y.remove()), A.remove(), P !== !1 && (this.element.style.position = P), null != ca && (clearTimeout(ca), ca = null)
		}, this.modify = function(b) {
			b && (n = a.extend({}, n, b)), this.destroy(), this.create(), _ = !0, this.reset(!0)
		}, this.update = function(b) {
			b && (n = a.extend({}, n, b)), this.size = n.size || this.size, this.lock = n.mouseWheelLock || this.lock, this.lock_anyway = n.lockAnyway || this.lock_anyway, W = n.hideOnIdle || W, X = n.hideDelay || X, Z = n.observeContent || !1, S = n.dragEvent || !1, "undefined" != typeof b.styleClass && (L && A.removeClass(L), L = b.styleClass, L && A.addClass(L), M = !!L.match(/scroll\-left|scroll\-top/))
		}, this.start = function() {
			z[s] = 0
		}, this.end = function() {
			z[s] = z[t]
		}, this.hide = function() {
			A.hide()
		}, this.show = function() {
			A.show()
		}, this.update_scroll = function() {
			J = !1, E[o] = G + "px", z[s] = parseInt(Math.round(G / O))
		};
		var aa = -1,
			ba = -1,
			ca = null,
			da = 0;
		return this.track_size = function() {
			return 0 == N && j(), N
		}, this.create(), _ = !0, this.reset(!0), $ = z[t], this
	};
	a.fn.ace_scroll = function(d, e) {
		var f, g = this.each(function() {
			var b = a(this),
				g = b.data("ace_scroll"),
				h = "object" == typeof d && d;
			g || b.data("ace_scroll", g = new c(this, h)), "string" == typeof d && (f = g[d](e))
		});
		return f === b ? g : f
	}, a.fn.ace_scroll.defaults = {
		size: 200,
		horizontal: !1,
		mouseWheel: !0,
		mouseWheelLock: !1,
		lockAnyway: !1,
		styleClass: !1,
		observeContent: !1,
		hideOnIdle: !1,
		hideDelay: 1500,
		hoverReset: !0,
		reset: !1,
		dragEvent: !1,
		touchDrag: !0,
		touchSwipe: !1,
		scrollEvent: !1,
		detached: !1,
		updatePos: !0
	}
}(window.jQuery),
function(a, b) {
	var c = function(b, c) {
		var d = ace.helper.getAttrSettings(b, a.fn.ace_colorpicker.defaults),
			e = a.extend({}, a.fn.ace_colorpicker.defaults, c, d),
			f = a(b),
			g = "",
			h = "",
			i = null,
			j = [];
		f.addClass("hide").find("option").each(function() {
			var a = "colorpick-btn",
				b = this.value.replace(/[^\w\s,#\(\)\.]/g, "");
			b.indexOf("number") >= 0 || (this.value != b && (this.value = b), this.selected && (a += " selected", h = b), j.push(b), g += '<li><a class="' + a + '" style="background-color:' + b + ';" data-color="' + b + '"></a></li>')
		}).end().on("change.color", function() {
			f.next().find(".btn-colorpicker").css("background-color", this.value)
		}).after('<div class="dropdown dropdown-colorpicker">		<a data-toggle="dropdown" class="dropdown-toggle" ' + (e.auto_pos ? 'data-position="auto"' : "") + '><span class="btn-colorpicker" style="background-color:' + h + '"></span></a><ul class="dropdown-menu' + (e.caret ? " dropdown-caret" : "") + (e.pull_right ? " dropdown-menu-right" : "") + '">' + g + "</ul></div>");
		var k = f.next().find(".dropdown-menu");
		k.on(ace.click_event, function(b, c) {
			var d = a(b.target);
			if(!d.is(".colorpick-btn")) return !1;
			i && i.removeClass("selected"), i = d, i.addClass("selected");
			var e = i.data("color");
			return c !== !0 && f.val(e).trigger("change"), f.next().find(".btn-colorpicker").css("background-color", e), b.preventDefault(), !0
		}), i = f.next().find("a.selected"), this.pick = function(c, d) {
			if("number" == typeof c) {
				if(c >= j.length) return;
				b.selectedIndex = c, k.find("a:eq(" + c + ")").trigger(ace.click_event, [!0])
			} else if("string" == typeof c) {
				var e = c.replace(/[^\w\s,#\(\)\.]/g, "");
				if(c = j.indexOf(e), -1 == c && d === !0 && (j.push(e), a("<option />").appendTo(f).val(e), a('<li><a class="colorpick-btn"></a></li>').appendTo(k).find("a").css("background-color", e).data("color", e), c = j.length - 1), -1 == c) return;
				k.find("a:eq(" + c + ")").trigger(ace.click_event, [!0])
			}
		}, this.destroy = function() {
			f.removeClass("hide").next().remove(), j = []
		}
	};
	a.fn.ace_colorpicker = function(d, e) {
		var f, g = this.each(function() {
			var b = a(this),
				g = b.data("ace_colorpicker"),
				h = "object" == typeof d && d;
			g || b.data("ace_colorpicker", g = new c(this, h)), "string" == typeof d && (f = g[d](e))
		});
		return f === b ? g : f
	}, a.fn.ace_colorpicker.defaults = {
		pull_right: !1,
		caret: !0,
		auto_pos: !0
	}
}(window.jQuery),
function(a, b) {
	var c = "multiple" in document.createElement("INPUT"),
		d = "FileList" in window,
		e = "FileReader" in window,
		f = "File" in window,
		g = function(b, c) {
			var d = this,
				e = ace.helper.getAttrSettings(b, a.fn.ace_file_input.defaults);
			this.settings = a.extend({}, a.fn.ace_file_input.defaults, c, e), this.$element = a(b), this.element = b, this.disabled = !1, this.can_reset = !0, this.$element.off("change.ace_inner_call").on("change.ace_inner_call", function(a, b) {
				return d.disabled || b === !0 ? void 0 : i.call(d)
			});
			var f = this.$element.closest("label").css({
					display: "block"
				}),
				g = 0 == f.length ? "label" : "span";
			this.$element.wrap("<" + g + ' class="ace-file-input" />'), this.apply_settings(), this.reset_input_field()
		};
	g.error = {
		FILE_LOAD_FAILED: 1,
		IMAGE_LOAD_FAILED: 2,
		THUMBNAIL_FAILED: 3
	}, g.prototype.apply_settings = function() {
		var b = this;
		this.multi = this.$element.attr("multiple") && c, this.well_style = "well" == this.settings.style, this.well_style ? (this.settings.thumbnail || (this.settings.thumbnail = "small"), this.$element.parent().addClass("ace-file-multiple")) : this.$element.parent().removeClass("ace-file-multiple"), this.$element.parent().find(":not(input[type=file])").remove(), this.$element.after('<span class="ace-file-container" data-title="' + this.settings.btn_choose + '"><span class="ace-file-name" data-title="' + this.settings.no_file + '">' + (this.settings.no_icon ? '<i class="' + ace.vars.icon + this.settings.no_icon + '"></i>' : "") + "</span></span>"), this.$label = this.$element.next(), this.$container = this.$element.closest(".ace-file-input");
		var e = !!this.settings.icon_remove;
		if(e) {
			var f = a('<a class="remove" href="#"><i class="' + ace.vars.icon + this.settings.icon_remove + '"></i></a>').appendTo(this.$element.parent());
			f.on(ace.click_event, function(a) {
				if(a.preventDefault(), !b.can_reset) return !1;
				var c = !0;
				if(b.settings.before_remove && (c = b.settings.before_remove.call(b.element)), !c) return !1;
				b.reset_input();
				return !1
			})
		}
		this.settings.droppable && d && h.call(this)
	}, g.prototype.show_file_list = function(b, c) {
		var d = "undefined" == typeof b ? this.$element.data("ace_input_files") : b;
		if(d && 0 != d.length) {
			this.well_style && (this.$label.find(".ace-file-name").remove(), this.settings.btn_change || this.$label.addClass("hide-placeholder")), this.$label.attr("data-title", this.settings.btn_change).addClass("selected");
			for(var g = 0; g < d.length; g++) {
				var h = "",
					i = !1;
				if("string" == typeof d[g]) h = d[g];
				else if(f && d[g] instanceof File) h = a.trim(d[g].name);
				else {
					if(!(d[g] instanceof Object && d[g].hasOwnProperty("name"))) continue;
					h = d[g].name, d[g].hasOwnProperty("type") && (i = d[g].type), d[g].hasOwnProperty("path") || (d[g].path = d[g].name)
				}
				var k = h.lastIndexOf("\\") + 1;
				0 == k && (k = h.lastIndexOf("/") + 1), h = h.substr(k), 0 == i && (i = /\.(jpe?g|png|gif|svg|bmp|tiff?)$/i.test(h) ? "image" : /\.(mpe?g|flv|mov|avi|swf|mp4|mkv|webm|wmv|3gp)$/i.test(h) ? "video" : /\.(mp3|ogg|wav|wma|amr|aac)$/i.test(h) ? "audio" : "file");
				var l = {
						file: "fa fa-file",
						image: "fa fa-picture-o file-image",
						video: "fa fa-film file-video",
						audio: "fa fa-music file-audio"
					},
					m = l[i];
				if(this.well_style) {
					this.$label.append('<span class="ace-file-name" data-title="' + h + '"><i class="' + ace.vars.icon + m + '"></i></span>');
					var n = c === !0 && f && d[g] instanceof File ? a.trim(d[g].type) : "",
						o = e && this.settings.thumbnail && (n.length > 0 && n.match("image") || 0 == n.length && "image" == i);
					if(o) {
						var p = this;
						a.when(j.call(this, d[g])).fail(function(a) {
							p.settings.preview_error && p.settings.preview_error.call(p, h, a.code)
						})
					}
				} else this.$label.find(".ace-file-name").attr({
					"data-title": h
				}).find(ace.vars[".icon"]).attr("class", ace.vars.icon + m)
			}
			return !0
		}
	}, g.prototype.reset_input = function() {
		this.reset_input_ui(), this.reset_input_field()
	}, g.prototype.reset_input_ui = function() {
		this.$label.attr({
			"data-title": this.settings.btn_choose,
			"class": "ace-file-container"
		}).find(".ace-file-name:first").attr({
			"data-title": this.settings.no_file,
			"class": "ace-file-name"
		}).find(ace.vars[".icon"]).attr("class", ace.vars.icon + this.settings.no_icon).prev("img").remove(), this.settings.no_icon || this.$label.find(ace.vars[".icon"]).remove(), this.$label.find(".ace-file-name").not(":first").remove(), this.reset_input_data()
	}, g.prototype.reset_input_field = function() {
		this.$element.wrap("<form>").parent().get(0).reset(), this.$element.unwrap()
	}, g.prototype.reset_input_data = function() {
		this.$element.data("ace_input_files") && (this.$element.removeData("ace_input_files"), this.$element.removeData("ace_input_method"))
	}, g.prototype.enable_reset = function(a) {
		this.can_reset = a
	}, g.prototype.disable = function() {
		this.disabled = !0, this.$element.attr("disabled", "disabled").addClass("disabled")
	}, g.prototype.enable = function() {
		this.disabled = !1, this.$element.removeAttr("disabled").removeClass("disabled")
	}, g.prototype.files = function() {
		return a(this).data("ace_input_files") || null
	}, g.prototype.method = function() {
		return a(this).data("ace_input_method") || ""
	}, g.prototype.update_settings = function(b) {
		this.settings = a.extend({}, this.settings, b), this.apply_settings()
	}, g.prototype.loading = function(b) {
		if(b === !1) this.$container.find(".ace-file-overlay").remove(), this.element.removeAttribute("readonly");
		else {
			var c = "string" == typeof b ? b : '<i class="overlay-content fa fa-spin fa-spinner orange2 fa-2x"></i>',
				d = this.$container.find(".ace-file-overlay");
			0 == d.length && (d = a('<div class="ace-file-overlay"></div>').appendTo(this.$container), d.on("click tap", function(a) {
				return a.stopImmediatePropagation(), a.preventDefault(), !1
			}), this.element.setAttribute("readonly", "true")), d.empty().append(c)
		}
	};
	var h = function() {
			var a = this,
				b = this.$element.parent();
			b.off("dragenter").on("dragenter", function(a) {
				a.preventDefault(), a.stopPropagation()
			}).off("dragover").on("dragover", function(a) {
				a.preventDefault(), a.stopPropagation()
			}).off("drop").on("drop", function(b) {
				if(b.preventDefault(), b.stopPropagation(), !a.disabled) {
					var c = b.originalEvent.dataTransfer,
						d = c.files;
					if(!a.multi && d.length > 1) {
						var e = [];
						e.push(d[0]), d = e
					}
					return d = l.call(a, d, !0), d === !1 ? !1 : (a.$element.data("ace_input_method", "drop"), a.$element.data("ace_input_files", d), a.show_file_list(d, !0), a.$element.triggerHandler("change", [!0]), !0)
				}
			})
		},
		i = function() {
			var a = this.element.files || [this.element.value];
			return a = l.call(this, a, !1), a === !1 ? !1 : (this.$element.data("ace_input_method", "select"), this.$element.data("ace_input_files", a), this.show_file_list(a, !0), !0)
		},
		j = function(b) {
			var c = this,
				d = c.$label.find(".ace-file-name:last"),
				e = new a.Deferred,
				h = function(b, c) {
					d.prepend("<img class='middle' style='display:none;' />");
					var e = d.find("img:last").get(0);
					a(e).one("load", function() {
						i.call(null, e, c)
					}).one("error", function() {
						j.call(null, e)
					}), e.src = b
				},
				i = function(b, f) {
					var h = c.settings.previewSize;
					h || (c.settings.previewWidth || c.settings.previewHeight ? h = {
						previewWidth: c.settings.previewWidth,
						previewHeight: c.settings.previewHeight
					} : (h = 50, "large" == c.settings.thumbnail && (h = 150))), "fit" == c.settings.thumbnail ? h = d.width() : "number" == typeof h && (h = parseInt(Math.min(h, d.width())));
					var i = k(b, h);
					if(null == i) return a(this).remove(), void e.reject({
						code: g.error.THUMBNAIL_FAILED
					});
					var j = !0;
					if(f && f instanceof File) {
						f.width = i.width, f.height = i.height, c.$element.trigger("file.preview.ace", {
							file: f
						});
						var l;
						c.$element.trigger(l = new a.Event("file.preview.ace"), {
							file: f
						}), l.isDefaultPrevented() && (j = !1)
					}
					if(j) {
						var m = i.previewWidth,
							n = i.previewHeight;
						"small" == c.settings.thumbnail ? m = n = parseInt(Math.max(m, n)) : d.addClass("large"), a(b).css({
							"background-image": "url(" + i.src + ")",
							width: m,
							height: n
						}).data("thumb", i.src).attr({
							src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg=="
						}).show()
					}
					e.resolve()
				},
				j = function(a) {
					d.find("img").remove(), e.reject({
						code: g.error.IMAGE_LOAD_FAILED
					})
				};
			if(f && b instanceof File) {
				var l = new FileReader;
				l.onload = function(a) {
					h(a.target.result, b)
				}, l.onerror = function(a) {
					e.reject({
						code: g.error.FILE_LOAD_FAILED
					})
				}, l.readAsDataURL(b)
			} else b instanceof Object && b.hasOwnProperty("path") && h(b.path, null);
			return e.promise()
		},
		k = function(b, c, d) {
			var e = b.width,
				f = b.height;
			e = e > 0 ? e : a(b).width(), f = f > 0 ? f : a(b).height();
			var g = !1,
				h = !1,
				i = !1;
			"number" == typeof c ? g = c : c instanceof Object && (c.previewWidth && !c.previewHeight ? i = c.previewWidth : c.previewHeight && !c.previewWidth ? h = c.previewHeight : c.previewWidth && c.previewHeight && (i = c.previewWidth, h = c.previewHeight)), g ? e > f ? (i = g, h = parseInt(f / e * i)) : (h = g, i = parseInt(e / f * h)) : !h && i ? h = parseInt(f / e * i) : h && !i && (i = parseInt(e / f * h));
			var j;
			try {
				var k = document.createElement("canvas");
				k.width = i, k.height = h;
				var l = k.getContext("2d");
				l.drawImage(b, 0, 0, e, f, 0, 0, i, h), j = k.toDataURL()
			} catch(m) {
				j = null
			}
			return j ? (/^data\:image\/(png|jpe?g|gif);base64,[0-9A-Za-z\+\/\=]+$/.test(j) || (j = null), j ? {
				src: j,
				previewWidth: i,
				previewHeight: h,
				width: e,
				height: f
			} : null) : null
		},
		l = function(a, b) {
			var c = o.call(this, a, b);
			return -1 === c ? (this.reset_input(), !1) : c && 0 != c.length ? ((c instanceof Array || d && c instanceof FileList) && (a = c), c = !0, this.settings.before_change && (c = this.settings.before_change.call(this.element, a, b)), -1 === c ? (this.reset_input(), !1) : c && 0 != c.length ? ((c instanceof Array || d && c instanceof FileList) && (a = c), a) : (this.$element.data("ace_input_files") || this.reset_input(), !1)) : (this.$element.data("ace_input_files") || this.reset_input(), !1)
		},
		m = function(a) {
			return a ? ("string" == typeof a && (a = [a]), 0 == a.length ? null : new RegExp(".(?:" + a.join("|") + ")$", "i")) : null
		},
		n = function(a) {
			return a ? ("string" == typeof a && (a = [a]), 0 == a.length ? null : new RegExp("^(?:" + a.join("|").replace(/\//g, "\\/") + ")$", "i")) : null
		},
		o = function(b, c) {
			var d = m(this.settings.allowExt),
				e = m(this.settings.denyExt),
				g = n(this.settings.allowMime),
				h = n(this.settings.denyMime),
				i = this.settings.maxSize || !1;
			if(!(d || e || g || h || i)) return !0;
			for(var j = [], k = {}, l = 0; l < b.length; l++) {
				var o = b[l],
					p = f ? o.name : o;
				if(!d || d.test(p))
					if(e && e.test(p)) "ext" in k || (k.ext = []), k.ext.push(p);
					else {
						var q;
						if(f) {
							if((q = a.trim(o.type)).length > 0) {
								if(g && !g.test(q)) {
									"mime" in k || (k.mime = []), k.mime.push(p);
									continue
								}
								if(h && h.test(q)) {
									"mime" in k || (k.mime = []), k.mime.push(p);
									continue
								}
							}
							i && o.size > i ? ("size" in k || (k.size = []), k.size.push(p)) : j.push(o)
						} else j.push(o)
					}
				else "ext" in k || (k.ext = []), k.ext.push(p)
			}
			if(j.length == b.length) return b;
			var r = {
				ext: 0,
				mime: 0,
				size: 0
			};
			"ext" in k && (r.ext = k.ext.length), "mime" in k && (r.mime = k.mime.length), "size" in k && (r.size = k.size.length);
			var s;
			return this.$element.trigger(s = new a.Event("file.error.ace"), {
				file_count: b.length,
				invalid_count: b.length - j.length,
				error_list: k,
				error_count: r,
				dropped: c
			}), s.isDefaultPrevented() ? -1 : j
		};
	a.fn.aceFileInput = a.fn.ace_file_input = function(c, d) {
		var e, f = this.each(function() {
			var b = a(this),
				f = b.data("ace_file_input"),
				h = "object" == typeof c && c;
			f || b.data("ace_file_input", f = new g(this, h)), "string" == typeof c && (e = f[c](d))
		});
		return e === b ? f : e
	}, a.fn.ace_file_input.defaults = {
		style: !1,
		no_file: "No File ...",
		no_icon: "fa fa-upload",
		btn_choose: "Choose",
		btn_change: "Change",
		icon_remove: "fa fa-times",
		droppable: !1,
		thumbnail: !1,
		allowExt: null,
		denyExt: null,
		allowMime: null,
		denyMime: null,
		maxSize: !1,
		previewSize: !1,
		previewWidth: !1,
		previewHeight: !1,
		before_change: null,
		before_remove: null,
		preview_error: null
	}
}(window.jQuery), ! function(a) {
	"use strict";
	var b = function(b, c) {
		this.$element = a(b), this.options = a.extend({}, a.fn.bs_typeahead.defaults, c), this.matcher = this.options.matcher || this.matcher, this.sorter = this.options.sorter || this.sorter, this.highlighter = this.options.highlighter || this.highlighter, this.updater = this.options.updater || this.updater, this.source = this.options.source, this.$menu = a(this.options.menu), this.shown = !1, this.listen()
	};
	b.prototype = {
		constructor: b,
		select: function() {
			var a = this.$menu.find(".active").attr("data-value");
			return this.$element.val(this.updater(a)).change(), this.hide()
		},
		updater: function(a) {
			return a
		},
		show: function() {
			var b = a.extend({}, this.$element.position(), {
				height: this.$element[0].offsetHeight
			});
			return this.$menu.insertAfter(this.$element).css({
				top: b.top + b.height,
				left: b.left
			}).show(), this.shown = !0, this
		},
		hide: function() {
			return this.$menu.hide(), this.shown = !1, this
		},
		lookup: function(b) {
			var c;
			return this.query = this.$element.val(), !this.query || this.query.length < this.options.minLength ? this.shown ? this.hide() : this : (c = a.isFunction(this.source) ? this.source(this.query, a.proxy(this.process, this)) : this.source, c ? this.process(c) : this)
		},
		process: function(b) {
			var c = this;
			return b = a.grep(b, function(a) {
				return c.matcher(a)
			}), b = this.sorter(b), b.length ? this.render(b.slice(0, this.options.items)).show() : this.shown ? this.hide() : this
		},
		matcher: function(a) {
			return ~a.toLowerCase().indexOf(this.query.toLowerCase())
		},
		sorter: function(a) {
			for(var b, c = [], d = [], e = []; b = a.shift();) b.toLowerCase().indexOf(this.query.toLowerCase()) ? ~b.indexOf(this.query) ? d.push(b) : e.push(b) : c.push(b);
			return c.concat(d, e)
		},
		highlighter: function(a) {
			var b = this.query.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
			return a.replace(new RegExp("(" + b + ")", "ig"), function(a, b) {
				return "<strong>" + b + "</strong>"
			})
		},
		render: function(b) {
			var c = this;
			return b = a(b).map(function(b, d) {
				return b = a(c.options.item).attr("data-value", d), b.find("a").html(c.highlighter(d)), b[0]
			}), b.first().addClass("active"), this.$menu.html(b), this
		},
		next: function(b) {
			var c = this.$menu.find(".active").removeClass("active"),
				d = c.next();
			d.length || (d = a(this.$menu.find("li")[0])), d.addClass("active")
		},
		prev: function(a) {
			var b = this.$menu.find(".active").removeClass("active"),
				c = b.prev();
			c.length || (c = this.$menu.find("li").last()), c.addClass("active")
		},
		listen: function() {
			this.$element.on("focus", a.proxy(this.focus, this)).on("blur", a.proxy(this.blur, this)).on("keypress", a.proxy(this.keypress, this)).on("keyup", a.proxy(this.keyup, this)), this.eventSupported("keydown") && this.$element.on("keydown", a.proxy(this.keydown, this)), this.$menu.on("click", a.proxy(this.click, this)).on("mouseenter", "li", a.proxy(this.mouseenter, this)).on("mouseleave", "li", a.proxy(this.mouseleave, this))
		},
		eventSupported: function(a) {
			var b = a in this.$element;
			return b || (this.$element.setAttribute(a, "return;"), b = "function" == typeof this.$element[a]), b
		},
		move: function(a) {
			if(this.shown) {
				switch(a.keyCode) {
					case 9:
					case 13:
					case 27:
						a.preventDefault();
						break;
					case 38:
						a.preventDefault(), this.prev();
						break;
					case 40:
						a.preventDefault(), this.next()
				}
				a.stopPropagation()
			}
		},
		keydown: function(b) {
			this.suppressKeyPressRepeat = ~a.inArray(b.keyCode, [40, 38, 9, 13, 27]), this.move(b)
		},
		keypress: function(a) {
			this.suppressKeyPressRepeat || this.move(a)
		},
		keyup: function(a) {
			switch(a.keyCode) {
				case 40:
				case 38:
				case 16:
				case 17:
				case 18:
					break;
				case 9:
				case 13:
					if(!this.shown) return;
					this.select();
					break;
				case 27:
					if(!this.shown) return;
					this.hide();
					break;
				default:
					this.lookup()
			}
			a.stopPropagation(), a.preventDefault()
		},
		focus: function(a) {
			this.focused = !0
		},
		blur: function(a) {
			this.focused = !1, !this.mousedover && this.shown && this.hide()
		},
		click: function(a) {
			a.stopPropagation(), a.preventDefault(), this.select(), this.$element.focus()
		},
		mouseenter: function(b) {
			this.mousedover = !0, this.$menu.find(".active").removeClass("active"), a(b.currentTarget).addClass("active")
		},
		mouseleave: function(a) {
			this.mousedover = !1, !this.focused && this.shown && this.hide()
		}
	};
	var c = a.fn.bs_typeahead;
	a.fn.bs_typeahead = function(c) {
		return this.each(function() {
			var d = a(this),
				e = d.data("bs_typeahead"),
				f = "object" == typeof c && c;
			e || d.data("bs_typeahead", e = new b(this, f)), "string" == typeof c && e[c]()
		})
	}, a.fn.bs_typeahead.defaults = {
		source: [],
		items: 8,
		menu: '<ul class="typeahead dropdown-menu"></ul>',
		item: '<li><a href="#"></a></li>',
		minLength: 1
	}, a.fn.bs_typeahead.Constructor = b, a.fn.bs_typeahead.noConflict = function() {
		return a.fn.bs_typeahead = c, this
	}, a(document).on("focus.bs_typeahead.data-api", '[data-provide="bs_typeahead"]', function(b) {
		var c = a(this);
		c.data("bs_typeahead") || c.bs_typeahead(c.data())
	})
}(window.jQuery),
function(a, b) {
	a.fn.ace_wysiwyg = function(b, c) {
		var d = a.extend({
				speech_button: !0,
				wysiwyg: {}
			}, b),
			e = ["#ac725e", "#d06b64", "#f83a22", "#fa573c", "#ff7537", "#ffad46", "#42d692", "#16a765", "#7bd148", "#b3dc6c", "#fbe983", "#fad165", "#92e1c0", "#9fe1e7", "#9fc6e7", "#4986e7", "#9a9cff", "#b99aff", "#c2c2c2", "#cabdbf", "#cca6ac", "#f691b2", "#cd74e6", "#a47ae2", "#444444"],
			f = {
				font: {
					values: ["Arial", "Courier", "Comic Sans MS", "Helvetica", "Open Sans", "Tahoma", "Verdana"],
					icon: "fa fa-font",
					title: "Font"
				},
				fontSize: {
					values: {
						5: "Huge",
						3: "Normal",
						1: "Small"
					},
					icon: "fa fa-text-height",
					title: "Font Size"
				},
				bold: {
					icon: "fa fa-bold",
					title: "Bold (Ctrl/Cmd+B)"
				},
				italic: {
					icon: "fa fa-italic",
					title: "Italic (Ctrl/Cmd+I)"
				},
				strikethrough: {
					icon: "fa fa-strikethrough",
					title: "Strikethrough"
				},
				underline: {
					icon: "fa fa-underline",
					title: "Underline"
				},
				insertunorderedlist: {
					icon: "fa fa-list-ul",
					title: "Bullet list"
				},
				insertorderedlist: {
					icon: "fa fa-list-ol",
					title: "Number list"
				},
				outdent: {
					icon: "fa fa-outdent",
					title: "Reduce indent (Shift+Tab)"
				},
				indent: {
					icon: "fa fa-indent",
					title: "Indent (Tab)"
				},
				justifyleft: {
					icon: "fa fa-align-left",
					title: "Align Left (Ctrl/Cmd+L)"
				},
				justifycenter: {
					icon: "fa fa-align-center",
					title: "Center (Ctrl/Cmd+E)"
				},
				justifyright: {
					icon: "fa fa-align-right",
					title: "Align Right (Ctrl/Cmd+R)"
				},
				justifyfull: {
					icon: "fa fa-align-justify",
					title: "Justify (Ctrl/Cmd+J)"
				},
				createLink: {
					icon: "fa fa-link",
					title: "Hyperlink",
					button_text: "Add",
					placeholder: "URL",
					button_class: "btn-primary"
				},
				unlink: {
					icon: "fa fa-chain-broken",
					title: "Remove Hyperlink"
				},
				insertImage: {
					icon: "fa fa-picture-o",
					title: "Insert picture",
					button_text: '<i class="' + ace.vars.icon + 'fa fa-file"></i> Choose Image &hellip;',
					placeholder: "Image URL",
					button_insert: "Insert",
					button_class: "btn-success",
					button_insert_class: "btn-primary",
					choose_file: !0
				},
				foreColor: {
					values: e,
					title: "Change Color"
				},
				backColor: {
					values: e,
					title: "Change Background Color"
				},
				undo: {
					icon: "fa fa-undo",
					title: "Undo (Ctrl/Cmd+Z)"
				},
				redo: {
					icon: "fa fa-repeat",
					title: "Redo (Ctrl/Cmd+Y)"
				},
				viewSource: {
					icon: "fa fa-code",
					title: "View Source"
				}
			},
			g = d.toolbar || ["font", null, "fontSize", null, "bold", "italic", "strikethrough", "underline", null, "insertunorderedlist", "insertorderedlist", "outdent", "indent", null, "justifyleft", "justifycenter", "justifyright", "justifyfull", null, "createLink", "unlink", null, "insertImage", null, "foreColor", null, "undo", "redo", null, "viewSource"];
		return this.each(function() {
			var b = ' <div class="wysiwyg-toolbar btn-toolbar center"> <div class="btn-group"> ';
			for(var c in g)
				if(g.hasOwnProperty(c)) {
					var e = g[c];
					if(null === e) {
						b += ' </div> <div class="btn-group"> ';
						continue
					}
					if("string" == typeof e && e in f) e = f[e], e.name = g[c];
					else {
						if(!("object" == typeof e && e.name in f)) continue;
						e = a.extend(f[e.name], e)
					}
					var h = "className" in e ? e.className : "btn-default";
					switch(e.name) {
						case "font":
							b += ' <a class="btn btn-sm ' + h + ' dropdown-toggle" data-toggle="dropdown" title="' + e.title + '"><i class="' + ace.vars.icon + e.icon + '"></i><i class="' + ace.vars.icon + 'fa fa-angle-down icon-on-right"></i></a> ', b += ' <ul class="dropdown-menu dropdown-light dropdown-caret">';
							for(var i in e.values) e.values.hasOwnProperty(i) && (b += ' <li><a data-edit="fontName ' + e.values[i] + '" style="font-family:\'' + e.values[i] + "'\">" + e.values[i] + "</a></li> ");
							b += " </ul>";
							break;
						case "fontSize":
							b += ' <a class="btn btn-sm ' + h + ' dropdown-toggle" data-toggle="dropdown" title="' + e.title + '"><i class="' + ace.vars.icon + e.icon + '"></i>&nbsp;<i class="' + ace.vars.icon + 'fa fa-angle-down icon-on-right"></i></a> ', b += ' <ul class="dropdown-menu dropdown-light dropdown-caret"> ';
							for(var j in e.values) e.values.hasOwnProperty(j) && (b += ' <li><a data-edit="fontSize ' + j + '"><font size="' + j + '">' + e.values[j] + "</font></a></li> ");
							b += " </ul> ";
							break;
						case "createLink":
							b += ' <div class="btn-group"> <a class="btn btn-sm ' + h + ' dropdown-toggle" data-toggle="dropdown" title="' + e.title + '"><i class="' + ace.vars.icon + e.icon + '"></i></a> ', b += ' <div class="dropdown-menu dropdown-caret dropdown-menu-right">							 <div class="input-group">								<input class="form-control" placeholder="' + e.placeholder + '" type="text" data-edit="' + e.name + '" />								<span class="input-group-btn">									<button class="btn btn-sm ' + e.button_class + '" type="button">' + e.button_text + "</button>								</span>							 </div>						</div> </div>";
							break;
						case "insertImage":
							b += ' <div class="btn-group"> <a class="btn btn-sm ' + h + ' dropdown-toggle" data-toggle="dropdown" title="' + e.title + '"><i class="' + ace.vars.icon + e.icon + '"></i></a> ', b += ' <div class="dropdown-menu dropdown-caret dropdown-menu-right">							 <div class="input-group">								<input class="form-control" placeholder="' + e.placeholder + '" type="text" data-edit="' + e.name + '" />								<span class="input-group-btn">									<button class="btn btn-sm ' + e.button_insert_class + '" type="button">' + e.button_insert + "</button>								</span>							 </div>", e.choose_file && "FileReader" in window && (b += '<div class="space-2"></div>							 <label class="center block no-margin-bottom">								<button class="btn btn-sm ' + e.button_class + ' wysiwyg-choose-file" type="button">' + e.button_text + '</button>								<input type="file" data-edit="' + e.name + '" />							  </label>'), b += " </div> </div>";
							break;
						case "foreColor":
						case "backColor":
							b += ' <select class="hide wysiwyg_colorpicker" title="' + e.title + '"> ', a.each(e.values, function(a, c) {
								b += ' <option value="' + c + '">' + c + "</option> "
							}), b += " </select> ", b += ' <input style="display:none;" disabled class="hide" type="text" data-edit="' + e.name + '" /> ';
							break;
						case "viewSource":
							b += ' <a class="btn btn-sm ' + h + '" data-view="source" title="' + e.title + '"><i class="' + ace.vars.icon + e.icon + '"></i></a> ';
							break;
						default:
							b += ' <a class="btn btn-sm ' + h + '" data-edit="' + e.name + '" title="' + e.title + '"><i class="' + ace.vars.icon + e.icon + '"></i></a> '
					}
				}
			b += " </div> ";
			var k;
			d.speech_button && "onwebkitspeechchange" in (k = document.createElement("input")) && (b += ' <input class="wysiwyg-speech-input" type="text" data-edit="inserttext" x-webkit-speech />'), k = null, b += " </div> ", b = d.toolbar_place ? d.toolbar_place.call(this, b) : a(this).before(b).prev(), a.fn.tooltip && b.find("a[title]").tooltip({
				animation: !1,
				container: "body"
			}), b.find(".dropdown-menu input[type=text]").on("click", function() {
				return !1
			}).on("change", function() {
				a(this).closest(".dropdown-menu").siblings(".dropdown-toggle").dropdown("toggle")
			}).on("keydown", function(b) {
				27 == b.which ? (this.value = "", a(this).change()) : 13 == b.which && (b.preventDefault(), b.stopPropagation(), a(this).change())
			}), b.find("input[type=file]").prev().on(ace.click_event, function(b) {
				a(this).next().click()
			}), b.find(".wysiwyg_colorpicker").each(function() {
				var b = a(this).ace_colorpicker({
					pull_right: !0
				}).change(function() {
					a(this).nextAll("input").eq(0).val(this.value).change()
				}).next().find(".btn-colorpicker");
				a.fn.tooltip && b.tooltip({
					title: this.title,
					animation: !1,
					container: "body"
				})
			});
			var l = a(this),
				m = !1;
			b.find("a[data-view=source]").on("click", function(b) {
				if(b.preventDefault(), m) {
					var c = l.next();
					l.html(c.val()).show(), c.remove(), a(this).removeClass("active")
				} else a("<textarea />").css({
					width: l.outerWidth(),
					height: l.outerHeight()
				}).val(l.html()).insertAfter(l), l.hide(), a(this).addClass("active");
				m = !m
			});
			var n = a.extend({}, {
				activeToolbarClass: "active",
				toolbarSelector: b
			}, d.wysiwyg || {});
			a(this).wysiwyg(n)
		}), this
	}
}(window.jQuery),
function(a, b) {
	function c(b, c) {
		var d = ace.helper.getAttrSettings(b, a.fn.ace_spinner.defaults),
			e = a.extend({}, a.fn.ace_spinner.defaults, c, d),
			f = e.max;
		f = ("" + f).length;
		var g = parseInt(Math.max(20 * f + 40, 90)),
			h = a(b),
			i = "btn-sm",
			j = 2;
		h.hasClass("input-sm") ? (i = "btn-xs", j = 1) : h.hasClass("input-lg") && (i = "btn-lg", j = 3), 2 == j ? g += 25 : 3 == j && (g += 50), h.addClass("spinbox-input form-control text-center").wrap('<div class="ace-spinner middle">');
		var k = h.closest(".ace-spinner").spinbox(e).wrapInner("<div class='input-group'></div>"),
			l = k.data("fu.spinbox");
		e.on_sides ? (h.before('<div class="spinbox-buttons input-group-btn">					<button type="button" class="btn spinbox-down ' + i + " " + e.btn_down_class + '">						<i class="icon-only ' + ace.vars.icon + e.icon_down + '"></i>					</button>				</div>').after('<div class="spinbox-buttons input-group-btn">					<button type="button" class="btn spinbox-up ' + i + " " + e.btn_up_class + '">						<i class="icon-only ' + ace.vars.icon + e.icon_up + '"></i>					</button>				</div>'), k.addClass("touch-spinner"), k.css("width", g + "px")) : (h.after('<div class="spinbox-buttons input-group-btn">					<button type="button" class="btn spinbox-up ' + i + " " + e.btn_up_class + '">						<i class="icon-only ' + ace.vars.icon + e.icon_up + '"></i>					</button>					<button type="button" class="btn spinbox-down ' + i + " " + e.btn_down_class + '">						<i class="icon-only ' + ace.vars.icon + e.icon_down + '"></i>					</button>				</div>'), ace.vars.touch || e.touch_spinner ? (k.addClass("touch-spinner"), k.css("width", g + "px")) : (h.next().addClass("btn-group-vertical"), k.css("width", g + "px"))), k.on("changed", function() {
			h.trigger("change")
		}), this._call = function(a, b) {
			l[a](b)
		}
	}
	a.fn.ace_spinner = function(d, e) {
		var f, g = this.each(function() {
			var b = a(this),
				g = b.data("ace_spinner"),
				h = "object" == typeof d && d;
			g || (h = a.extend({}, a.fn.ace_spinner.defaults, d), b.data("ace_spinner", g = new c(this, h))), "string" == typeof d && (f = g._call(d, e))
		});
		return f === b ? g : f
	}, a.fn.ace_spinner.defaults = {
		icon_up: "fa fa-chevron-up",
		icon_down: "fa fa-chevron-down",
		on_sides: !1,
		btn_up_class: "",
		btn_down_class: "",
		max: 999,
		touch_spinner: !1
	}
}(window.jQuery),
function(a, b) {
	a.fn.aceTree = a.fn.ace_tree = function(b) {
		var c = {
			"open-icon": ace.vars.icon + "fa fa-folder-open",
			"close-icon": ace.vars.icon + "fa fa-folder",
			"toggle-icon": ace.vars.icon + "fa fa-play",
			"selected-icon": ace.vars.icon + "fa fa-check",
			"unselected-icon": ace.vars.icon + "fa fa-times",
			"base-icon": ace.vars.icon + "fa",
			"folder-open-icon": "fa fa-plus-square-o",
			"folder-close-icon": "fa fa-plus-minus-o",
			loadingHTML: "Loading..."
		};
		return this.each(function() {
			var d = ace.helper.getAttrSettings(this, c),
				e = a.extend({}, c, b, d),
				f = a(this);
			f.addClass("tree").attr("role", "tree"), f.html('<li class="tree-branch hide" data-template="treebranch" role="treeitem" aria-expanded="false">				' + (e.folderSelect ? '<i class="icon-caret ' + e["folder-open-icon"] + '"></i>&nbsp;' : "") + '				<div class="tree-branch-header">					<span class="tree-branch-name">						<i class="icon-folder ' + e["close-icon"] + '"></i>						<span class="tree-label"></span>					</span>				</div>				<ul class="tree-branch-children" role="group"></ul>				<div class="tree-loader" role="alert">' + e.loadingHTML + '</div>			</li>			<li class="tree-item hide" data-template="treeitem" role="treeitem">				<span class="tree-item-name">				  ' + (null == e["unselected-icon"] ? "" : '<i class="icon-item ' + e["unselected-icon"] + '"></i>') + '				  <span class="tree-label"></span>				</span>			</li>'), f.addClass(1 == e.selectable ? "tree-selectable" : "tree-unselectable"), f.tree(e)
		}), this
	}
}(window.jQuery),
function(a, b) {
	a.fn.aceWizard = a.fn.ace_wizard = function(b) {
		return this.each(function() {
			var c = a(this);
			c.wizard(), ace.vars.old_ie && c.find("ul.steps > li").last().addClass("last-child");
			var d = b && b.buttons ? a(b.buttons) : c.siblings(".wizard-actions").eq(0),
				e = c.data("fu.wizard");
			e.$prevBtn.remove(), e.$nextBtn.remove(), e.$prevBtn = d.find(".btn-prev").eq(0).on(ace.click_event, function() {
				e.previous()
			}).attr("disabled", "disabled"), e.$nextBtn = d.find(".btn-next").eq(0).on(ace.click_event, function() {
				e.next()
			}).removeAttr("disabled"), e.nextText = e.$nextBtn.text();
			var f = b && (b.selectedItem && b.selectedItem.step || b.step);
			f && (e.currentStep = f, e.setState())
		}), this
	}
}(window.jQuery),
function(a, b) {
	function c(b, c) {
		var e = this,
			f = a(b),
			g = "right",
			h = !1,
			i = f.hasClass("fade"),
			j = ace.helper.getAttrSettings(b, a.fn.ace_aside.defaults);
		if(this.settings = a.extend({}, a.fn.ace_aside.defaults, c, j), !this.settings.background || c.scroll_style || j.scroll_style || (this.settings.scroll_style = "scroll-white no-track"), this.container = this.settings.container, this.container) try {
			a(this.container).get(0) == document.body && (this.container = null)
		} catch(k) {}
		this.container && (this.settings.backdrop = !1, f.addClass("aside-contained"));
		var l = f.find(".modal-dialog"),
			m = f.find(".modal-content"),
			n = 300;
		this.initiate = function() {
			b.className = b.className.replace(/(\s|^)aside\-(right|top|left|bottom)(\s|$)/gi, "$1$3"), g = this.settings.placement, g && (g = a.trim(g.toLowerCase())), g && /right|top|left|bottom/.test(g) || (g = "right"), f.attr("data-placement", g), f.addClass("aside-" + g), /right|left/.test(g) ? (h = !0, f.addClass("aside-vc")) : f.addClass("aside-hz"), this.settings.fixed && f.addClass("aside-fixed"), this.settings.background && f.addClass("aside-dark"), this.settings.offset && f.addClass("navbar-offset"), this.settings.transition || f.addClass("transition-off"), f.addClass("aside-hidden"), this.insideContainer(), l = f.find(".modal-dialog"), m = f.find(".modal-content"), this.settings.body_scroll || f.on("mousewheel.aside DOMMouseScroll.aside touchmove.aside pointermove.aside", function(b) {
				return a.contains(m[0], b.target) ? void 0 : (b.preventDefault(), !1)
			}), 0 == this.settings.backdrop && f.addClass("no-backdrop")
		}, this.show = function() {
			if(0 == this.settings.backdrop) try {
				f.data("bs.modal").$backdrop.remove()
			} catch(b) {}
			this.container ? a(this.container).addClass("overflow-hidden") : f.css("position", "fixed"), f.removeClass("aside-hidden")
		}, this.hide = function() {
			this.container && (this.container.addClass("overflow-hidden"), ace.vars.firefox && b.offsetHeight), o(), ace.vars.transition && !i && f.one("bsTransitionEnd", function() {
				f.addClass("aside-hidden"), f.css("position", ""), e.container && e.container.removeClass("overflow-hidden")
			}).emulateTransitionEnd(n)
		}, this.shown = function() {
			if(o(), a("body").removeClass("modal-open").css("padding-right", ""), "invisible" == this.settings.backdrop) try {
				f.data("bs.modal").$backdrop.css("opacity", 0)
			} catch(b) {}
			var c = h ? m.height() : l.height();
			ace.vars.touch ? m.addClass("overflow-scroll").css("max-height", c + "px") : m.hasClass("ace-scroll") || m.ace_scroll({
				size: c,
				reset: !0,
				mouseWheelLock: !0,
				lockAnyway: !this.settings.body_scroll,
				styleClass: this.settings.scroll_style,
				observeContent: !0,
				hideOnIdle: !ace.vars.old_ie,
				hideDelay: 1500
			}), d.off("resize.modal.aside").on("resize.modal.aside", function() {
				if(ace.vars.touch) m.css("max-height", (h ? m.height() : l.height()) + "px");
				else {
					m.ace_scroll("disable");
					var a = h ? m.height() : l.height();
					m.ace_scroll("update", {
						size: a
					}).ace_scroll("enable").ace_scroll("reset")
				}
			}).triggerHandler("resize.modal.aside"), e.container && ace.vars.transition && !i && f.one("bsTransitionEnd", function() {
				e.container.removeClass("overflow-hidden")
			}).emulateTransitionEnd(n)
		}, this.hidden = function() {
			d.off(".aside"), ace.vars.transition && !i || (f.addClass("aside-hidden"), f.css("position", ""))
		}, this.insideContainer = function() {
			var b = a(".main-container"),
				c = f.find(".modal-dialog");
			if(c.css({
					right: "",
					left: ""
				}), b.hasClass("container")) {
				var e = !1;
				1 == h && (c.css(g, parseInt((d.width() - b.width()) / 2)), e = !0), e && ace.vars.firefox && ace.helper.redraw(b[0])
			}
		}, this.flip = function() {
			var a = {
				right: "left",
				left: "right",
				top: "bottom",
				bottom: "top"
			};
			f.removeClass("aside-" + g).addClass("aside-" + a[g]), g = a[g]
		};
		var o = function() {
			var a = f.find(".aside-trigger");
			if(0 != a.length) {
				a.toggleClass("open");
				var b = a.find(ace.vars[".icon"]);
				0 != b.length && b.toggleClass(b.attr("data-icon1") + " " + b.attr("data-icon2"))
			}
		};
		this.initiate(), this.container && (this.container = a(this.container)), f.appendTo(this.container || "body")
	}
	var d = a(window);
	a(document).on("show.bs.modal", ".modal.aside", function(b) {
		a(".aside.in").modal("hide"), a(this).ace_aside("show")
	}).on("hide.bs.modal", ".modal.aside", function(b) {
		a(this).ace_aside("hide")
	}).on("shown.bs.modal", ".modal.aside", function(b) {
		a(this).ace_aside("shown")
	}).on("hidden.bs.modal", ".modal.aside", function(b) {
		a(this).ace_aside("hidden")
	}), a(window).on("resize.aside_container", function() {
		a(".modal.aside").ace_aside("insideContainer")
	}), a(document).on("settings.ace.aside", function(b, c) {
		"main_container_fixed" == c && a(".modal.aside").ace_aside("insideContainer")
	}), a.fn.aceAside = a.fn.ace_aside = function(d, e) {
		var f, g = this.each(function() {
			var b = a(this),
				g = b.data("ace_aside"),
				h = "object" == typeof d && d;
			g || b.data("ace_aside", g = new c(this, h)), "string" == typeof d && "function" == typeof g[d] && (f = e instanceof Array ? g[d].apply(g, e) : g[d](e))
		});
		return f === b ? g : f
	}, a.fn.ace_aside.defaults = {
		fixed: !1,
		background: !1,
		offset: !1,
		body_scroll: !1,
		transition: !0,
		scroll_style: "scroll-dark no-track",
		container: null,
		backdrop: !1,
		placement: "right"
	}
}(window.jQuery);