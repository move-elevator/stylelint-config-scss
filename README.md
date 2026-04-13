# @move-elevator/stylelint-config-scss

A shareable Stylelint configuration for SCSS (Sass) projects.

## Installation

```bash
npm i -D @move-elevator/stylelint-config-scss
```

### Peer Dependencies

This package requires the following peer dependencies:

```bash
npm i -D postcss-scss stylelint stylelint-order stylelint-scss @stylistic/stylelint-plugin
```

## Usage

Create a stylelint config file like `.stylelintrc.json` in your project root and extend this configuration:

```json
{
  "extends": "@move-elevator/stylelint-config-scss/.stylelintrc.json"
}
```

## What's Included

This configuration uses `postcss-scss` as the custom syntax and includes the following plugins:

- **@stylistic/stylelint-plugin** - Stylistic rules for formatting
- **stylelint-order** - Property ordering rules
- **stylelint-scss** - SCSS-specific linting rules

### Key Rules

| Rule                           | Setting                                             |
|--------------------------------|-----------------------------------------------------|
| Block closing brace empty line | No empty line before `}`                            |
| Block opening brace            | Space before                                        |
| Color hex case                 | Lowercase                                           |
| Color hex length               | Long format (`#ffffff`)                             |
| Declaration empty line before  | Never                                               |
| Duplicate properties           | Not allowed                                         |
| Empty blocks                   | Not allowed                                         |
| Leading zero                   | Required (`0.5` not `.5`)                           |
| Max nesting depth              | 4 levels (ignoring blockless at-rules)              |
| Named colors                   | Not allowed                                         |
| Properties order               | Alphabetical                                        |
| Pseudo-element notation        | Double colon (`::before`)                           |
| Rule empty line before         | Always (except first-nested, ignored after comment) |
| Selector class pattern         | BEM or kebab-case                                   |
| Single-line declarations       | Not allowed                                         |
| String quotes                  | Double quotes                                       |
| Trailing semicolon             | Required                                            |
| Unit case                      | Lowercase                                           |

## License

[MIT](LICENSE.md)
