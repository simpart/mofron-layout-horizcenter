# mofron-layout-hrzcenter
[mofron](https://mofron.github.io/mofron/) is module based frontend framework.

horizon center layout


# Install
```
npm install mofron mofron-layout-hrzcenter
```

# Sample
```html
<setting>
    <tag load="mofron-comp-text">Text</tag>
    <tag load="mofron-layout-hrzcenter">HrzCent</tag>
</setting>

<div width=100% layout=HrzCent:80>
    <Text>Horizontal</Text>
    <Text>Center</Text>
    <Text>Layout</Text>
</div>
```

# Parameter

| Short<br>Form | Parameter Name | Type | Description |
|:-------------:|:---------------|:-----|:------------|
| ◯  | rate | number | center rate  |
| | | | undefined: call as getter |
| ◯  | type | string | center type |
| | | | undefined: call as getter |

