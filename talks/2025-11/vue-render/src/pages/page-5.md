## Direct DOM vs Virtual DOM\*

<div class="pt-8">

### Setup

- Initial Items: 1000
- Patch Items: 500
- Iterations: 100

</div>

<div class="flex flex-row gap-10 pt-6">

<div class="grow-1">

### Direct DOM

| Metric      | Time    |
| ----------- | ------- |
| **Average** | 1.74 ms |
| **Read**    | 0.54 ms |
| **Total**   | 174 ms  |

</div>

<div class="grow-1">

### Virtual DOM

| Metric      | Time    |
| ----------- | ------- |
| **Average** | 1.48 ms |
| **Read**    | -       |
| **Total**   | 148 ms  |

</div>

</div>

<div class="opacity-30 text-sm pt-4">
Virtual DOM is faster by ~20%
</div>
