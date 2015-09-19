filemode
==========

<!-- Badge Start -->
<a name="badges"></a>

[![Build Status][bd_travis_shield_url]][bd_travis_url]
[![Code Climate][bd_codeclimate_shield_url]][bd_codeclimate_url]
[![Code Coverage][bd_codeclimate_coverage_shield_url]][bd_codeclimate_url]
[![npm Version][bd_npm_shield_url]][bd_npm_url]

[bd_repo_url]: https://github.com/okunishinishi/node-filemode
[bd_travis_url]: http://travis-ci.org/okunishinishi/node-filemode
[bd_travis_shield_url]: http://img.shields.io/travis/okunishinishi/node-filemode.svg?style=flat
[bd_license_url]: https://github.com/okunishinishi/node-filemode/blob/master/LICENSE
[bd_codeclimate_url]: http://codeclimate.com/github/okunishinishi/node-filemode
[bd_codeclimate_shield_url]: http://img.shields.io/codeclimate/github/okunishinishi/node-filemode.svg?style=flat
[bd_codeclimate_coverage_shield_url]: http://img.shields.io/codeclimate/coverage/github/okunishinishi/node-filemode.svg?style=flat
[bd_gemnasium_url]: https://gemnasium.com/okunishinishi/node-filemode
[bd_gemnasium_shield_url]: https://gemnasium.com/okunishinishi/node-filemode.svg
[bd_npm_url]: http://www.npmjs.org/package/filemode
[bd_npm_shield_url]: http://img.shields.io/npm/v/filemode.svg?style=flat
[bd_bower_badge_url]: https://img.shields.io/bower/v/filemode.svg?style=flat

<!-- Badge End -->


<!-- Description Start -->
<a name="description"></a>

Change file permissions

<!-- Description End -->


<!-- Overview Start -->
<a name="overview"></a>


<!-- Overview End -->


<!-- Sections Start -->
<a name="sections"></a>

<!-- Section from "doc/readme/01.Installation.md.hbs" Start -->

<a name="section-doc-readme-01-installation-md"></a>
Installation
-----

```bash
$ npm install filemode --save
```

<!-- Section from "doc/readme/01.Installation.md.hbs" End -->

<!-- Section from "doc/readme/02.Usage.md.hbs" Start -->

<a name="section-doc-readme-02-usage-md"></a>
Usage
---------

```javascript
var filemode = require('filemode');

filemode('ci/*.sh', '755', function (err) {
    /*...*/
});
```

<!-- Section from "doc/readme/02.Usage.md.hbs" End -->


<!-- Sections Start -->


<!-- LICENSE Start -->
<a name="license"></a>

License
-------
This software is released under the [MIT License](https://github.com/okunishinishi/node-filemode/blob/master/LICENSE).

<!-- LICENSE End -->


<!-- Links Start -->
<a name="links"></a>

Links
------


<!-- Links End -->
