# 📦 use-formatter

Uma coleção de utilitários de formatação para datas, horas, números e strings — com suporte à localização em português (`pt-BR`) via `date-fns`.

## ✨ Instalação

```bash
npm install use-formatter
```

ou

```bash
yarn add use-formatter
```

> **Pré-requisito:** este pacote usa `date-fns` como peer dependency. Certifique-se de que ele esteja instalado:

```bash
npm install date-fns
```

---

## 🚀 Uso

```ts
import { useFormatter } from 'use-formatter'

const {
  humanizeDate,
  formatPrice,
  onlyDate,
  onlyTime,
  humanizeDistanceDate,
  convertTimeToDuration
} = useFormatter()

formatPrice(1234.56) // '1.234,56'
onlyDate('2025-05-27T00:00:00Z') // '27/05/2025'
onlyTime('2025-05-27T14:30:00Z') // '14:30'
humanizeDate('2025-05-27T10:15:00Z') // '27/05/2025 - 10:15'
humanizeDistanceDate('2025-05-25T10:00:00Z') // 'há 2 dias'
convertTimeToDuration('02:45') // 'PT2H45M'
```

---

## 🔧 Métodos disponíveis

| Método                       | Descrição                                                      |
|-----------------------------|-----------------------------------------------------------------|
| `humanizeDate(date)`        | Retorna a data em formato `dd/MM/yyyy - HH:mm`                 |
| `onlyDate(date)`            | Retorna apenas a data formatada                                |
| `onlyTime(date)`            | Retorna apenas a hora formatada                                |
| `formatPrice(value)`        | Formata um número como valor monetário brasileiro              |
| `humanizeDistanceDate(date)`| Retorna distância da data (ex: "há 2 dias")                    |
| `convertTimeToDuration()`   | Converte tempo 'HH:mm' para duração ISO (ex: `PT1H30M`)        |
| `parsePercentage()`         | Arredonda porcentagens com uma casa decimal                    |
| `formatEllipsis(text, len)` | Adiciona `...` caso o texto ultrapasse o limite                |
| `formatTextWithLineBreaks()`| Quebra texto em linhas baseado em pontos finais                |
| `formatabbreviateNumber()`  | Abrevia números grandes (ex: 1200 → `1.2K`)                     |

---

## 🧑‍💻 Autor

Desenvolvido por [@leuzindev](https://github.com/leuzindev)

---

## 📝 Licença

MIT