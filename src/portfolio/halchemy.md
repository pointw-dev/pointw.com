---
title: halchemy
---

<img src="/img/portfolio/halchemy-banner.png">

# HAL for humans

> Create clients for HAL-based APIs with ease and without compromise.

<portfolio-repos name="halchemy" github pypi npm ruby />

With halchemy when building your client makes it easier to operate HAL based APIs.

Instead of doing this...

<tabs>
<tab name="Python">

```python
order = {
    'orderNumber': '12345',
    'partNumber': '009343-12',
    'quantity': 3
}  

# the _links all have relative hrefs, but requests needs an absolute URL
orders_url = urljoin(api_url, customer['_links']['orders']['href'])

# We need to convert the order dict to a JSON string
# and supply the Content-type header
requests.post(update_url, json.dumps(order), 
              headers={'Content-type': 'application/json'})
```
</tab>
<tab name="JavaScript">

```javascript{14-16}
order = {
    orderNumber: '12345',
    partNumber: '009343-12',
    quantity: 3
} 
// assuming axios.defaults.baseURL has been set to the API root URL
axios.post(customer._links.orders.href, order, { 
    headers: { 'Content-type': 'application/json' } 
})
```
</tab>
<tab name="Ruby">

```ruby{18-20}
order = {
  "orderNumber" => "12345",
  "partNumber" => "009343-12",
  "quantity" => 3
}

# the _links all have relative hrefs, but HTTPX needs an absolute URL
def url_join(base, path)
  [base.chomp("/"), path.sub(%r{\A/+}, "")].join("/")
end

url = url_join(api_url, customer["_links"]["orders"]["href"])
HTTPX.with(headers: headers).post(url, json: order)
```
</tab>
<future-languages />
</tabs>


...with halchemy you can do this:

<tabs>
<tab name="Python">

```python{18-20}
order = {
    'orderNumber': '12345',
    'partNumber': '009343-12',
    'quantity': 3
}  

api.follow(customer).to('orders').post(order)
```
</tab>
<tab name="JavaScript">

```javascript{14-16}
order = {
    orderNumber: '12345',
    partNumber: '009343-12',
    quantity: 3
} 

api.follow(customer).to('orders').post(order)
```
</tab>
<tab name="Ruby">

```ruby{18-20}
order = {
  "orderNumber" => "12345",
  "partNumber" => "009343-12",
  "quantity" => 3
}

api.follow(customer).to("orders").post(order)
```
</tab>
<future-languages />
</tabs>

[Click here](https://pointw-dev.github.io/halchemy/) to learn more.
