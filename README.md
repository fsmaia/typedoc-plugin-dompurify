# typedoc-plugin-dompurify

A plugin for [TypeDoc](https://typedoc.org/) which runs [DOMPurify](https://github.com/cure53/DOMPurify) to avoid XSS injections and remove invalid HTML tags.

## Installation

```sh
npm install --save-dev typedoc-plugin-dompurify
```

## Usage

```sh
$ npx typedoc --plugin typedoc-plugin-dompurify
```
