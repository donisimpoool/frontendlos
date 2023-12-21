webpackJsonp([47],{1653:function(d,n){d.exports='<!doctype html>\n<html lang="en">\n<head>\n    <meta charset="UTF-8">\n    <title>Grid</title>\n</head>\n<body><div id="content" class="faster fadeInUp">\n\n    <div class="well">\n        <h1>Grid options</h1>\n        <p>\n            See how aspects of the Bootstrap grid system work across multiple devices with a handy table.\n            <br>\n            <br>\n        </p>\n\n        <div class="row">\n\n            <div class="col-sm-3">\n\n                <img src="assets/img/demo/responseimg.png" alt="" style="max-width:300px; width:100%;">\n\n                <br>\n                <h3>BuiltWith Bootstrap</h3>\n                Bootstrap is made to not only look and behave great in the latest desktop browsers,\n                but in tablet and smartphone browsers too. It’s packed with great features. Such as the 12-column responsive mobile first grid,\n                dozens of components, plugins and more!\n\n            </div>\n            <div class="col-sm-9">\n\n                <table class="table table-bordered table-striped">\n                    <thead>\n                    <tr>\n                        <th></th>\n                        <th> Extra small devices <small>Phones (&lt;768px)</small></th>\n                        <th> Small devices <small>Tablets (≥768px)</small></th>\n                        <th> Medium devices <small>Desktops (≥992px)</small></th>\n                        <th> Large devices <small>Desktops (≥1200px)</small></th>\n                    </tr>\n                    </thead>\n                    <tbody>\n                    <tr>\n                        <th>Grid behavior</th>\n                        <td>Horizontal at all times</td>\n                        <td colspan="3">Collapsed to start, horizontal above breakpoints</td>\n                    </tr>\n                    <tr>\n                        <th>Max container width</th>\n                        <td>None (auto)</td>\n                        <td>750px</td>\n                        <td>970px</td>\n                        <td>1170px</td>\n                    </tr>\n                    <tr>\n                        <th>Class prefix</th>\n                        <td>\n                            <code>\n                                .col-xs-\n                            </code></td>\n                        <td>\n                            <code>\n                                .col-sm-\n                            </code></td>\n                        <td>\n                            <code>\n                                .col-md-\n                            </code></td>\n                        <td>\n                            <code>\n                                .col-lg-\n                            </code></td>\n                    </tr>\n                    <tr>\n                        <th># of columns</th>\n                        <td colspan="4">12</td>\n                    </tr>\n                    <tr>\n                        <th>Max column width</th>\n                        <td class="text-muted">Auto</td>\n                        <td>60px</td>\n                        <td>78px</td>\n                        <td>95px</td>\n                    </tr>\n                    <tr>\n                        <th>Gutter width</th>\n                        <td colspan="4">30px (15px on each side of a column)</td>\n                    </tr>\n                    <tr>\n                        <th>Nestable</th>\n                        <td colspan="4">Yes</td>\n                    </tr>\n                    <tr>\n                        <th>Offsets</th>\n                        <td colspan="1" class="text-muted">N/A</td>\n                        <td colspan="3">Yes</td>\n                    </tr>\n                    <tr>\n                        <th>Column ordering</th>\n                        <td class="text-muted">N/A</td>\n                        <td colspan="3">Yes</td>\n                    </tr>\n                    </tbody>\n                </table>\n\n\n            </div>\n\n        </div>\n\n\n    </div>\n\n    <h6>Example: Stacked-to-horizontal</h6>\n    <p>\n        Using a single set of <code>\n        .col-md-*</code>\n        grid classes, you can create a basic grid system that starts out stacked on mobile devices and tablet devices (the extra small to small range) before becoming horizontal on desktop (medium) devices.\n    </p>\n\n    <div class="well">\n\n        <div class="row show-grid">\n            <div class="col-md-1">\n                .col-md-1\n            </div>\n            <div class="col-md-1">\n                .col-md-1\n            </div>\n            <div class="col-md-1">\n                .col-md-1\n            </div>\n            <div class="col-md-1">\n                .col-md-1\n            </div>\n            <div class="col-md-1">\n                .col-md-1\n            </div>\n            <div class="col-md-1">\n                .col-md-1\n            </div>\n            <div class="col-md-1">\n                .col-md-1\n            </div>\n            <div class="col-md-1">\n                .col-md-1\n            </div>\n            <div class="col-md-1">\n                .col-md-1\n            </div>\n            <div class="col-md-1">\n                .col-md-1\n            </div>\n            <div class="col-md-1">\n                .col-md-1\n            </div>\n            <div class="col-md-1">\n                .col-md-1\n            </div>\n        </div>\n\n        <div class="row show-grid">\n            <div class="col-md-8">\n                .col-md-8\n            </div>\n            <div class="col-md-4">\n                .col-md-4\n            </div>\n        </div>\n\n        <div class="row show-grid">\n            <div class="col-md-4">\n                .col-md-4\n            </div>\n            <div class="col-md-4">\n                .col-md-4\n            </div>\n            <div class="col-md-4">\n                .col-md-4\n            </div>\n        </div>\n\n        <div class="row show-grid">\n            <div class="col-md-6">\n                .col-md-6\n            </div>\n            <div class="col-md-6">\n                .col-md-6\n            </div>\n        </div>\n\n    </div>\n\n    <h6>Example: Mobile and desktop</h6>\n    <p>Don\'t want your columns to simply stack in smaller devices? Use the extra small and medium device grid classes by adding <code>.col-xs-*</code> <code>.col-md-*</code> to your columns. See the example below for a better idea of how it all works.</p>\n\n    <div class="well">\n\n        <div class="row show-grid">\n            <div class="col-xs-12 col-md-8">.col-xs-12 col-md-8</div>\n            <div class="col-xs-6 col-md-4">.col-xs-6 .col-md-4</div>\n        </div>\n\n        <div class="row show-grid">\n            <div class="col-xs-6 col-md-4">.col-xs-6 .col-md-4</div>\n            <div class="col-xs-6 col-md-4">.col-xs-6 .col-md-4</div>\n            <div class="col-xs-6 col-md-4">.col-xs-6 .col-md-4</div>\n        </div>\n\n        <div class="row show-grid">\n            <div class="col-xs-6">.col-xs-6</div>\n            <div class="col-xs-6">.col-xs-6</div>\n        </div>\n\n    </div>\n\n    <h6>Example: Mobile, tablet, desktops</h6>\n    <p>Build on the previous example by creating even more dynamic and powerful layouts with tablet <code>.col-sm-*</code> classes.</p>\n\n    <div class="well">\n        <div class="row show-grid">\n            <div class="col-xs-12 col-sm-6 col-md-8">.col-xs-12 .col-sm-6 .col-md-8</div>\n            <div class="col-xs-6 col-sm-6 col-md-4">.col-xs-6 .col-sm-6 .col-md-4</div>\n        </div>\n\n        <div class="row show-grid">\n            <div class="col-xs-6 col-sm-4 col-md-4">.col-xs-6 .col-sm-4 .col-md-4</div>\n            <div class="col-xs-6 col-sm-4 col-md-4">.col-xs-6 .col-sm-4 .col-md-4</div>\n            \x3c!-- Optional: clear the XS cols if their content doesn\'t match in height --\x3e\n            <div class="clearfix visible-xs"></div>\n            <div class="col-xs-6 col-sm-4 col-md-4">.col-xs-6 .col-sm-4 .col-md-4</div>\n        </div>\n    </div>\n\n    <h6>Offsetting columns</h6>\n    <p>Move columns to the right using <code>.col-md-offset-*</code> classes. These classes increase the left margin of a column by <code>*</code> columns. For example, <code>.col-md-offset-4</code> moves <code>.col-md-4</code> over four columns.</p>\n\n    <div class="well">\n\n        <div class="row show-grid">\n            <div class="col-md-4">.col-md-4</div>\n            <div class="col-md-4 col-md-offset-4">.col-md-4 .col-md-offset-4</div>\n        </div>\n\n        <div class="row show-grid">\n            <div class="col-md-3 col-md-offset-3">.col-md-3 .col-md-offset-3</div>\n            <div class="col-md-3 col-md-offset-3">.col-md-3 .col-md-offset-3</div>\n        </div>\n\n        <div class="row show-grid">\n            <div class="col-md-6 col-md-offset-3">.col-md-6 .col-md-offset-3</div>\n        </div>\n\n    </div>\n\n    <h6>Nesting columns</h6>\n    <p>To nest your content with the default grid, add a new <code>.row</code> and set of <code>.col-md-*</code> columns within an existing <code>.col-md-*</code> column. Nested rows should include a set of columns that add up to 12.</p>\n\n    <div class="well">\n\n        <div class="row show-grid">\n            <div class="col-md-12">\n                Level 1: .col-md-12\n                <div class="row show-grid">\n                    <div class="col-md-6">\n                        Level 2: .col-md-6\n                    </div>\n                    <div class="col-md-6">\n                        Level 2: .col-md-6\n                    </div>\n                </div>\n            </div>\n        </div>\n\n    </div>\n\n    <hr class="simple">\n\n    <div class="well">\n\n        <h1>Responsive utilities</h1>\n\n        <p class="alert alert-info">\n            <strong>\n                For faster mobile-friendly development, use these utility classes for showing and hiding content by device via media query. Also included are utility classes for toggling content when printed.\n            </strong>\n        </p>\n\n        <p>Try to use these on a limited basis and avoid creating entirely different versions of the same site. Instead, use them to complement each device\'s presentation. <strong>Responsive utilities are currently only available for block and table toggling.</strong> Use with inline and table elements is currently not supported.</p>\n\n\n        <h3>Available classes</h3>\n\n        <p>Use a single or combination of the available classes for toggling content across viewport breakpoints.</p>\n\n        <table class="table table-bordered table-striped responsive-utilities">\n            <thead>\n            <tr>\n                <th></th>\n                <th>\n                    Extra small devices\n                    <small>Phones (&lt;768px)</small>\n                </th>\n                <th>\n                    Small devices\n                    <small>Tablets (≥768px)</small>\n                </th>\n                <th>\n                    Medium devices\n                    <small>Desktops (≥992px)</small>\n                </th>\n                <th>\n                    Large devices\n                    <small>Desktops (≥1200px)</small>\n                </th>\n            </tr>\n            </thead>\n            <tbody>\n            <tr>\n                <th><code>.visible-xs</code></th>\n                <td class="is-visible">Visible</td>\n                <td class="is-hidden">Hidden</td>\n                <td class="is-hidden">Hidden</td>\n                <td class="is-hidden">Hidden</td>\n            </tr>\n            <tr>\n                <th><code>.visible-sm</code></th>\n                <td class="is-hidden">Hidden</td>\n                <td class="is-visible">Visible</td>\n                <td class="is-hidden">Hidden</td>\n                <td class="is-hidden">Hidden</td>\n            </tr>\n            <tr>\n                <th><code>.visible-md</code></th>\n                <td class="is-hidden">Hidden</td>\n                <td class="is-hidden">Hidden</td>\n                <td class="is-visible">Visible</td>\n                <td class="is-hidden">Hidden</td>\n            </tr>\n            <tr>\n                <th><code>.visible-lg</code></th>\n                <td class="is-hidden">Hidden</td>\n                <td class="is-hidden">Hidden</td>\n                <td class="is-hidden">Hidden</td>\n                <td class="is-visible">Visible</td>\n            </tr>\n            </tbody>\n            <tbody>\n            <tr>\n                <th><code>.hidden-xs</code></th>\n                <td class="is-hidden">Hidden</td>\n                <td class="is-visible">Visible</td>\n                <td class="is-visible">Visible</td>\n                <td class="is-visible">Visible</td>\n            </tr>\n            <tr>\n                <th><code>.hidden-sm</code></th>\n                <td class="is-visible">Visible</td>\n                <td class="is-hidden">Hidden</td>\n                <td class="is-visible">Visible</td>\n                <td class="is-visible">Visible</td>\n            </tr>\n            <tr>\n                <th><code>.hidden-md</code></th>\n                <td class="is-visible">Visible</td>\n                <td class="is-visible">Visible</td>\n                <td class="is-hidden">Hidden</td>\n                <td class="is-visible">Visible</td>\n            </tr>\n            <tr>\n                <th><code>.hidden-lg</code></th>\n                <td class="is-visible">Visible</td>\n                <td class="is-visible">Visible</td>\n                <td class="is-visible">Visible</td>\n                <td class="is-hidden">Hidden</td>\n            </tr>\n            </tbody>\n        </table>\n\n    </div>\n\n\n</div>\n\n</body>\n</html>'}});