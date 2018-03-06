
var Highcharts = require('highcharts');

(function(h) {
    "object" === typeof module && module.exports ? module.exports = h : h(Highcharts)
})(function(h) {
    (function(f) {
        var h = f.defaultOptions,
            n = f.doc,
            A = f.Chart,
            u = f.addEvent,
            F = f.removeEvent,
            D = f.fireEvent,
            q = f.createElement,
            B = f.discardElement,
            v = f.css,
            p = f.merge,
            C = f.pick,
            k = f.each,
            r = f.extend,
            G = f.isTouchDevice,
            E = f.win,
            H = f.Renderer.prototype.symbols;
        r(h.lang, {
            printChart: "Print chart",
            downloadPNG: "Download PNG image",
            downloadJPEG: "Download JPEG image",
            downloadPDF: "Download PDF document",
            downloadSVG: "Download SVG vector image",
            contextButtonTitle: "Chart context menu"
        });
        h.navigation = {
            buttonOptions: {
                theme: {},
                symbolSize: 14,
                symbolX: 12.5,
                symbolY: 10.5,
                align: "right",
                buttonSpacing: 3,
                height: 22,
                verticalAlign: "top",
                width: 24
            }
        };
        p(!0, h.navigation, {
            menuStyle: {
                border: "1px solid #999999",
                background: "#ffffff",
                padding: "5px 0"
            },
            menuItemStyle: {
                padding: "0.5em 1em",
                background: "none",
                color: "#333333",
                fontSize: G ? "14px" : "11px",
                transition: "background 250ms, color 250ms"
            },
            menuItemHoverStyle: {
                background: "#335cad",
                color: "#ffffff"
            },
            buttonOptions: {
                symbolFill: "#666666",
                symbolStroke: "#666666",
                symbolStrokeWidth: 3,
                theme: {
                    fill: "#ffffff",
                    stroke: "none",
                    padding: 5
                }
            }
        });
        h.exporting = {
            type: "image/png",
            url: "https://export.highcharts.com/",
            printMaxWidth: 780,
            scale: 2,
            buttons: {
                contextButton: {
                    className: "highcharts-contextbutton",
                    menuClassName: "highcharts-contextmenu",
                    symbol: "menu",
                    _titleKey: "contextButtonTitle",
                    menuItems: [{
                            textKey: "printChart",
                            onclick: function() {
                                this.print()
                            }
            }, {
                            separator: !0
            }, {
                            textKey: "downloadPNG",
                            onclick: function() {
                                this.exportChart()
                            }
            }, {
                            textKey: "downloadJPEG",
                            onclick: function() {
                                this.exportChart({
                                    type: "image/jpeg"
                                })
                            }
            },
                        {
                            textKey: "downloadPDF",
                            onclick: function() {
                                this.exportChart({
                                    type: "application/pdf"
                                })
                            }
            }, {
                            textKey: "downloadSVG",
                            onclick: function() {
                                this.exportChart({
                                    type: "image/svg+xml"
                                })
                            }
            }]
                }
            }
        };
        f.post = function(a, c, e) {
            var b;
            a = q("form", p({
                method: "post",
                action: a,
                enctype: "multipart/form-data"
            }, e), {
                display: "none"
            }, n.body);
            for (b in c) q("input", {
                type: "hidden",
                name: b,
                value: c[b]
            }, null, a);
            a.submit();
            B(a)
        };
        r(A.prototype, {
            sanitizeSVG: function(a, c) {
                if (c && c.exporting && c.exporting.allowHTML) {
                    var e = a.match(/<\/svg>(.*?$)/);
                    e && (e =
                        '\x3cforeignObject x\x3d"0" y\x3d"0" width\x3d"' + c.chart.width + '" height\x3d"' + c.chart.height + '"\x3e\x3cbody xmlns\x3d"http://www.w3.org/1999/xhtml"\x3e' + e[1] + "\x3c/body\x3e\x3c/foreignObject\x3e", a = a.replace("\x3c/svg\x3e", e + "\x3c/svg\x3e"))
                }
                a = a.replace(/zIndex="[^"]+"/g, "").replace(/isShadow="[^"]+"/g, "").replace(/symbolName="[^"]+"/g, "").replace(/jQuery[0-9]+="[^"]+"/g, "").replace(/url\(("|&quot;)(\S+)("|&quot;)\)/g, "url($2)").replace(/url\([^#]+#/g, "url(#").replace(/<svg /, '\x3csvg xmlns:xlink\x3d"http://www.w3.org/1999/xlink" ').replace(/ (NS[0-9]+\:)?href=/g,
                    " xlink:href\x3d").replace(/\n/, " ").replace(/<\/svg>.*?$/, "\x3c/svg\x3e").replace(/(fill|stroke)="rgba\(([ 0-9]+,[ 0-9]+,[ 0-9]+),([ 0-9\.]+)\)"/g, '$1\x3d"rgb($2)" $1-opacity\x3d"$3"').replace(/&nbsp;/g, "\u00a0").replace(/&shy;/g, "\u00ad");
                return a = a.replace(/<IMG /g, "\x3cimage ").replace(/<(\/?)TITLE>/g, "\x3c$1title\x3e").replace(/height=([^" ]+)/g, 'height\x3d"$1"').replace(/width=([^" ]+)/g, 'width\x3d"$1"').replace(/hc-svg-href="([^"]+)">/g, 'xlink:href\x3d"$1"/\x3e').replace(/ id=([^" >]+)/g, ' id\x3d"$1"').replace(/class=([^" >]+)/g,
                    'class\x3d"$1"').replace(/ transform /g, " ").replace(/:(path|rect)/g, "$1").replace(/style="([^"]+)"/g, function(a) {
                    return a.toLowerCase()
                })
            },
            getChartHTML: function() {
                return this.container.innerHTML
            },
            getSVG: function(a) {
                var c, e, b, w, m, g = p(this.options, a);
                n.createElementNS || (n.createElementNS = function(a, c) {
                    return n.createElement(c)
                });
                e = q("div", null, {
                    position: "absolute",
                    top: "-9999em",
                    width: this.chartWidth + "px",
                    height: this.chartHeight + "px"
                }, n.body);
                b = this.renderTo.style.width;
                m = this.renderTo.style.height;
                b = g.exporting.sourceWidth || g.chart.width || /px$/.test(b) && parseInt(b, 10) || 600;
                m = g.exporting.sourceHeight || g.chart.height || /px$/.test(m) && parseInt(m, 10) || 400;
                r(g.chart, {
                    animation: !1,
                    renderTo: e,
                    forExport: !0,
                    renderer: "SVGRenderer",
                    width: b,
                    height: m
                });
                g.exporting.enabled = !1;
                delete g.data;
                g.series = [];
                k(this.series, function(a) {
                    w = p(a.userOptions, {
                        animation: !1,
                        enableMouseTracking: !1,
                        showCheckbox: !1,
                        visible: a.visible
                    });
                    w.isInternal || g.series.push(w)
                });
                k(this.axes, function(a) {
                    a.userOptions.internalKey = f.uniqueKey()
                });
                c = new f.Chart(g, this.callback);
                a && k(["xAxis", "yAxis", "series"], function(b) {
                    var d = {};
                    a[b] && (d[b] = a[b], c.update(d))
                });
                k(this.axes, function(a) {
                    var b = f.find(c.axes, function(b) {
                            return b.options.internalKey === a.userOptions.internalKey
                        }),
                        d = a.getExtremes(),
                        e = d.userMin,
                        d = d.userMax;
                    !b || void 0 === e && void 0 === d || b.setExtremes(e, d, !0, !1)
                });
                b = c.getChartHTML();
                b = this.sanitizeSVG(b, g);
                g = null;
                c.destroy();
                B(e);
                return b
            },
            getSVGForExport: function(a, c) {
                var e = this.options.exporting;
                return this.getSVG(p({
                        chart: {
                            borderRadius: 0
                        }
                    },
                    e.chartOptions, c, {
                        exporting: {
                            sourceWidth: a && a.sourceWidth || e.sourceWidth,
                            sourceHeight: a && a.sourceHeight || e.sourceHeight
                        }
                    }))
            },
            exportChart: function(a, c) {
                c = this.getSVGForExport(a, c);
                a = p(this.options.exporting, a);
                f.post(a.url, {
                    filename: a.filename || "chart",
                    type: a.type,
                    width: a.width || 0,
                    scale: a.scale,
                    svg: c
                }, a.formAttributes)
            },
            print: function() {
                var a = this,
                    c = a.container,
                    e = [],
                    b = c.parentNode,
                    f = n.body,
                    m = f.childNodes,
                    g = a.options.exporting.printMaxWidth,
                    d, t;
                if (!a.isPrinting) {
                    a.isPrinting = !0;
                    a.pointer.reset(null,
                        0);
                    D(a, "beforePrint");
                    if (t = g && a.chartWidth > g) d = [a.options.chart.width, void 0, !1], a.setSize(g, void 0, !1);
                    k(m, function(a, b) {
                        1 === a.nodeType && (e[b] = a.style.display, a.style.display = "none")
                    });
                    f.appendChild(c);
                    E.focus();
                    E.print();
                    setTimeout(function() {
                        b.appendChild(c);
                        k(m, function(a, b) {
                            1 === a.nodeType && (a.style.display = e[b])
                        });
                        a.isPrinting = !1;
                        t && a.setSize.apply(a, d);
                        D(a, "afterPrint")
                    }, 1E3)
                }
            },
            contextMenu: function(a, c, e, b, f, m, g) {
                var d = this,
                    t = d.options.navigation,
                    w = d.chartWidth,
                    h = d.chartHeight,
                    p = "cache-" + a,
                    l = d[p],
                    x = Math.max(f, m),
                    y, z;
                l || (d[p] = l = q("div", {
                        className: a
                    }, {
                        position: "absolute",
                        zIndex: 1E3,
                        padding: x + "px"
                    }, d.container), y = q("div", {
                        className: "highcharts-menu"
                    }, null, l), v(y, r({
                        MozBoxShadow: "3px 3px 10px #888",
                        WebkitBoxShadow: "3px 3px 10px #888",
                        boxShadow: "3px 3px 10px #888"
                    }, t.menuStyle)), z = function() {
                        v(l, {
                            display: "none"
                        });
                        g && g.setState(0);
                        d.openMenu = !1
                    }, u(l, "mouseleave", function() {
                        l.hideTimer = setTimeout(z, 500)
                    }), u(l, "mouseenter", function() {
                        clearTimeout(l.hideTimer)
                    }), p = u(n, "mouseup", function(b) {
                        d.pointer.inClass(b.target,
                            a) || z()
                    }), u(d, "destroy", p), k(c, function(a) {
                        if (a) {
                            var b;
                            a.separator ? b = q("hr", null, null, y) : (b = q("div", {
                                className: "highcharts-menu-item",
                                onclick: function(b) {
                                    b && b.stopPropagation();
                                    z();
                                    a.onclick && a.onclick.apply(d, arguments)
                                },
                                innerHTML: a.text || d.options.lang[a.textKey]
                            }, null, y), b.onmouseover = function() {
                                v(this, t.menuItemHoverStyle)
                            }, b.onmouseout = function() {
                                v(this, t.menuItemStyle)
                            }, v(b, r({
                                cursor: "pointer"
                            }, t.menuItemStyle)));
                            d.exportDivElements.push(b)
                        }
                    }), d.exportDivElements.push(y, l), d.exportMenuWidth =
                    l.offsetWidth, d.exportMenuHeight = l.offsetHeight);
                c = {
                    display: "block"
                };
                e + d.exportMenuWidth > w ? c.right = w - e - f - x + "px" : c.left = e - x + "px";
                b + m + d.exportMenuHeight > h && "top" !== g.alignOptions.verticalAlign ? c.bottom = h - b - x + "px" : c.top = b + m - x + "px";
                v(l, c);
                d.openMenu = !0
            },
            addButton: function(a) {
                var c = this,
                    e = c.renderer,
                    b = p(c.options.navigation.buttonOptions, a),
                    f = b.onclick,
                    m = b.menuItems,
                    g, d, h = b.symbolSize || 12;
                c.btnCount || (c.btnCount = 0);
                c.exportDivElements || (c.exportDivElements = [], c.exportSVGElements = []);
                if (!1 !== b.enabled) {
                    var k =
                        b.theme,
                        n = k.states,
                        q = n && n.hover,
                        n = n && n.select,
                        l;
                    delete k.states;
                    f ? l = function(a) {
                        a.stopPropagation();
                        f.call(c, a)
                    } : m && (l = function() {
                        c.contextMenu(d.menuClassName, m, d.translateX, d.translateY, d.width, d.height, d);
                        d.setState(2)
                    });
                    b.text && b.symbol ? k.paddingLeft = C(k.paddingLeft, 25) : b.text || r(k, {
                        width: b.width,
                        height: b.height,
                        padding: 0
                    });
                    d = e.button(b.text, 0, 0, l, k, q, n).addClass(a.className).attr({
                        "stroke-linecap": "round",
                        title: c.options.lang[b._titleKey],
                        zIndex: 3
                    });
                    d.menuClassName = a.menuClassName || "highcharts-menu-" +
                        c.btnCount++;
                    b.symbol && (g = e.symbol(b.symbol, b.symbolX - h / 2, b.symbolY - h / 2, h, h).addClass("highcharts-button-symbol").attr({
                        zIndex: 1
                    }).add(d), g.attr({
                        stroke: b.symbolStroke,
                        fill: b.symbolFill,
                        "stroke-width": b.symbolStrokeWidth || 1
                    }));
                    d.add().align(r(b, {
                        width: d.width,
                        x: C(b.x, c.buttonOffset)
                    }), !0, "spacingBox");
                    c.buttonOffset += (d.width + b.buttonSpacing) * ("right" === b.align ? -1 : 1);
                    c.exportSVGElements.push(d, g)
                }
            },
            destroyExport: function(a) {
                var c = a ? a.target : this;
                a = c.exportSVGElements;
                var e = c.exportDivElements;
                a &&
                    (k(a, function(a, e) {
                        a && (a.onclick = a.ontouchstart = null, c.exportSVGElements[e] = a.destroy())
                    }), a.length = 0);
                e && (k(e, function(a, e) {
                    clearTimeout(a.hideTimer);
                    F(a, "mouseleave");
                    c.exportDivElements[e] = a.onmouseout = a.onmouseover = a.ontouchstart = a.onclick = null;
                    B(a)
                }), e.length = 0)
            }
        });
        H.menu = function(a, c, e, b) {
            return ["M", a, c + 2.5, "L", a + e, c + 2.5, "M", a, c + b / 2 + .5, "L", a + e, c + b / 2 + .5, "M", a, c + b - 1.5, "L", a + e, c + b - 1.5]
        };
        A.prototype.renderExporting = function() {
            var a, c = this.options.exporting,
                e = c.buttons,
                b = this.isDirtyExporting || !this.exportSVGElements;
            this.buttonOffset = 0;
            this.isDirtyExporting && this.destroyExport();
            if (b && !1 !== c.enabled) {
                for (a in e) this.addButton(e[a]);
                this.isDirtyExporting = !1
            }
            u(this, "destroy", this.destroyExport)
        };
        A.prototype.callbacks.push(function(a) {
            a.renderExporting();
            u(a, "redraw", a.renderExporting);
            k(["exporting", "navigation"], function(c) {
                a[c] = {
                    update: function(e, b) {
                        a.isDirtyExporting = !0;
                        p(!0, a.options[c], e);
                        C(b, !0) && a.redraw()
                    }
                }
            })
        })
		
		 'use strict';

    var each = Highcharts.each,
        pick = Highcharts.pick,
        seriesTypes = Highcharts.seriesTypes,
        downloadAttrSupported = document.createElement('a').download !== undefined;

    Highcharts.setOptions({
        lang: {
            downloadCSV: 'Download CSV',
            downloadXLS: 'Download XLS',
            viewData: 'View data table'
        }
    });


    /**
     * Get the data rows as a two dimensional array
     */
    Highcharts.Chart.prototype.getDataRows = function () {
        var options = (this.options.exporting || {}).csv || {},
            xAxis = this.xAxis[0],
            rows = {},
            rowArr = [],
            dataRows,
            names = [],
            i,
            x,
            xTitle,
            // Options
            dateFormat = options.dateFormat || '%Y-%m-%d %H:%M:%S',
            columnHeaderFormatter = options.columnHeaderFormatter || function (item, key, keyLength) {
                if (item instanceof Highcharts.Axis) {
                    return (item.options.title && item.options.title.text) ||
                        (item.isDatetimeAxis ? 'DateTime' : 'Category');
                }
                return item.name + (keyLength > 1 ? ' ('+ key + ')' : '');
            };

        // Loop the series and index values
        i = 0;
        each(this.series, function (series) {
            var keys = series.options.keys,
                pointArrayMap = keys || series.pointArrayMap || ['y'],
                valueCount = pointArrayMap.length,
                requireSorting = series.requireSorting,
                categoryMap = {},
                j;

            // Map the categories for value axes
            each(pointArrayMap, function (prop) {
                categoryMap[prop] = (series[prop + 'Axis'] && series[prop + 'Axis'].categories) || [];
            });

            if (series.options.includeInCSVExport !== false && series.visible !== false) { // #55
                j = 0;
                while (j < valueCount) {
                    names.push(columnHeaderFormatter(series, pointArrayMap[j], pointArrayMap.length));
                    j = j + 1;
                }

                each(series.points, function (point, pIdx) {
                    var key = requireSorting ? point.x : pIdx,
                        prop,
                        val;

                    j = 0;

                    if (!rows[key]) {
                        rows[key] = [];
                    }
                    rows[key].x = point.x;

                    // Pies, funnels, geo maps etc. use point name in X row
                    if (!series.xAxis || series.exportKey === 'name') {
                        rows[key].name = point.name;
                    }

                    while (j < valueCount) {
                        prop = pointArrayMap[j]; // y, z etc
                        val = point[prop];
                        rows[key][i + j] = pick(categoryMap[prop][val], val); // Pick a Y axis category if present
                        j = j + 1;
                    }

                });
                i = i + j;
            }
        });

        // Make a sortable array
        for (x in rows) {
            if (rows.hasOwnProperty(x)) {
                rowArr.push(rows[x]);
            }
        }
        // Sort it by X values
        rowArr.sort(function (a, b) {
            return a.x - b.x;
        });

        // Add header row
        xTitle = columnHeaderFormatter(xAxis);
        dataRows = [[xTitle].concat(names)];

        // Add the category column
        each(rowArr, function (row) {

            var category = row.name;
            if (!category) {
                if (xAxis.isDatetimeAxis) {
                    if (row.x instanceof Date) {
                        row.x = row.x.getTime();
                    }
                    category = Highcharts.dateFormat(dateFormat, row.x);
                } else if (xAxis.categories) {
                    category = pick(xAxis.names[row.x], xAxis.categories[row.x], row.x)
                } else {
                    category = row.x;
                }
            }

            // Add the X/date/category
            row.unshift(category);
            dataRows.push(row);
        });

        return dataRows;
    };

    /**
     * Get a CSV string
     */
    Highcharts.Chart.prototype.getCSV = function (useLocalDecimalPoint) {
        var csv = '',
            rows = this.getDataRows(),
            options = (this.options.exporting || {}).csv || {},
            itemDelimiter = options.itemDelimiter || ',', // use ';' for direct import to Excel
            lineDelimiter = options.lineDelimiter || '\n'; // '\n' isn't working with the js csv data extraction

        // Transform the rows to CSV
        each(rows, function (row, i) {
            var val = '',
                j = row.length,
                n = useLocalDecimalPoint ? (1.1).toLocaleString()[1] : '.';
            while (j--) {
                val = row[j];
                if (typeof val === "string") {
                    val = '"' + val + '"';
                }
                if (typeof val === 'number') {
                    if (n === ',') {
                        val = val.toString().replace(".", ",");
                    }
                }
                row[j] = val;
            }
            // Add the values
            csv += row.join(itemDelimiter);

            // Add the line delimiter
            if (i < rows.length - 1) {
                csv += lineDelimiter;
            }
        });
        return csv;
    };

    /**
     * Build a HTML table with the data
     */
    Highcharts.Chart.prototype.getTable = function (useLocalDecimalPoint) {
        var html = '<table>',
            rows = this.getDataRows();

        // Transform the rows to HTML
        each(rows, function (row, i) {
            var tag = i ? 'td' : 'th',
                val,
                j,
                n = useLocalDecimalPoint ? (1.1).toLocaleString()[1] : '.';

            html += '<tr>';
            for (j = 0; j < row.length; j = j + 1) {
                val = row[j];
                // Add the cell
                if (typeof val === 'number') {
                    val = val.toString();
                    if (n === ',') {
                        val = val.replace('.', n);
                    }
                    html += '<' + tag + ' class="number">' + val + '</' + tag + '>';

                } else {
                    html += '<' + tag + '>' + (val === undefined ? '' : val) + '</' + tag + '>';
                }
            }

            html += '</tr>';
        });
        html += '</table>';
        return html;
    };

    function getContent(chart, href, extension, content, MIME) {
        var a,
            blobObject,
            name,
            options = (chart.options.exporting || {}).csv || {},
            url = options.url || 'http://www.highcharts.com/studies/csv-export/download.php';

        if (chart.options.exporting.filename) {
            name = chart.options.exporting.filename;
        } else if (chart.title) {
            name = chart.title.textStr.replace(/ /g, '-').toLowerCase();
        } else {
            name = 'chart';
        }

        // MS specific. Check this first because of bug with Edge (#76)
        if (window.Blob && window.navigator.msSaveOrOpenBlob) {
            // Falls to msSaveOrOpenBlob if download attribute is not supported
            blobObject = new Blob([content]);
            window.navigator.msSaveOrOpenBlob(blobObject, name + '.' + extension);

        // Download attribute supported
        } else if (downloadAttrSupported) {
            a = document.createElement('a');
            a.href = href;
            a.target = '_blank';
            a.download = name + '.' + extension;
            document.body.appendChild(a);
            a.click();
            a.remove();

        } else {
            // Fall back to server side handling
            Highcharts.post(url, {
                data: content,
                type: MIME,
                extension: extension
            });
        }
    }

    /**
     * Call this on click of 'Download CSV' button
     */
    Highcharts.Chart.prototype.downloadCSV = function () {
        var csv = this.getCSV(true);
        getContent(
            this,
            'data:text/csv,\uFEFF' + csv.replace(/\n/g, '%0A'),
            'csv',
            csv,
            'text/csv'
        );
    };

    /**
     * Call this on click of 'Download XLS' button
     */
    Highcharts.Chart.prototype.downloadXLS = function () {
        var uri = 'data:application/vnd.ms-excel;base64,',
            template = '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40">' +
                '<head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet>' +
                '<x:Name>Ark1</x:Name>' +
                '<x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]-->' +
                '<style>td{border:none;font-family: Calibri, sans-serif;} .number{mso-number-format:"0.00";}</style>' +
                '<meta name=ProgId content=Excel.Sheet>' +
                '<meta charset=UTF-8>' +
                '</head><body>' +
                this.getTable(true) +
                '</body></html>',
            base64 = function (s) { 
                return window.btoa(unescape(encodeURIComponent(s))); // #50
            };
        getContent(
            this,
            uri + base64(template),
            'xls',
            template,
            'application/vnd.ms-excel'
        );
    };

    /**
     * View the data in a table below the chart
     */
    Highcharts.Chart.prototype.viewData = function () {
        if (!this.insertedTable) {
            var div = document.createElement('div');
            div.className = 'highcharts-data-table';
            // Insert after the chart container
            this.renderTo.parentNode.insertBefore(div, this.renderTo.nextSibling);
            div.innerHTML = this.getTable();
            this.insertedTable = true;
        }
    };


    // Add "Download CSV" to the exporting menu. Use download attribute if supported, else
    // run a simple PHP script that returns a file. The source code for the PHP script can be viewed at
    // https://raw.github.com/highslide-software/highcharts.com/master/studies/csv-export/csv.php
    if (Highcharts.getOptions().exporting) {
        Highcharts.getOptions().exporting.buttons.contextButton.menuItems.push({
            textKey: 'downloadCSV',
            onclick: function () { this.downloadCSV(); }
        }, {
            textKey: 'downloadXLS',
            onclick: function () { this.downloadXLS(); }
        }, {
            textKey: 'viewData',
            onclick: function () { this.viewData(); }
        });
    }

	

    // Series specific
    if (seriesTypes.map) {
        seriesTypes.map.prototype.exportKey = 'name';
    }
    if (seriesTypes.mapbubble) {
        seriesTypes.mapbubble.prototype.exportKey = 'name';
    }
		
    })(h)
});