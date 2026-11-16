# {py:mod}`SatosaDocumentation.response`

```{py:module} SatosaDocumentation.response
```

```{autodoc2-docstring} SatosaDocumentation.response
:allowtitles:
```

## Module Contents

### Classes

````{list-table}
:class: autosummary longtable
:align: left

* - {py:obj}`BadRequest <SatosaDocumentation.response.BadRequest>`
  - ```{autodoc2-docstring} SatosaDocumentation.response.BadRequest
    :summary:
    ```
* - {py:obj}`Created <SatosaDocumentation.response.Created>`
  - ```{autodoc2-docstring} SatosaDocumentation.response.Created
    :summary:
    ```
* - {py:obj}`NotFound <SatosaDocumentation.response.NotFound>`
  - ```{autodoc2-docstring} SatosaDocumentation.response.NotFound
    :summary:
    ```
* - {py:obj}`Redirect <SatosaDocumentation.response.Redirect>`
  - ```{autodoc2-docstring} SatosaDocumentation.response.Redirect
    :summary:
    ```
* - {py:obj}`Response <SatosaDocumentation.response.Response>`
  - ```{autodoc2-docstring} SatosaDocumentation.response.Response
    :summary:
    ```
* - {py:obj}`SeeOther <SatosaDocumentation.response.SeeOther>`
  - ```{autodoc2-docstring} SatosaDocumentation.response.SeeOther
    :summary:
    ```
* - {py:obj}`ServiceError <SatosaDocumentation.response.ServiceError>`
  - ```{autodoc2-docstring} SatosaDocumentation.response.ServiceError
    :summary:
    ```
* - {py:obj}`Unauthorized <SatosaDocumentation.response.Unauthorized>`
  - ```{autodoc2-docstring} SatosaDocumentation.response.Unauthorized
    :summary:
    ```
````

### API

`````{py:class} BadRequest(message=None, status=None, headers=None, content=None)
:canonical: SatosaDocumentation.response.BadRequest

Bases: {py:obj}`SatosaDocumentation.response.Response`

```{autodoc2-docstring} SatosaDocumentation.response.BadRequest
```

```{rubric} Initialization
```

```{autodoc2-docstring} SatosaDocumentation.response.BadRequest.__init__
```

````{py:attribute} _status
:canonical: SatosaDocumentation.response.BadRequest._status
:value: >
   '400 Bad Request'

```{autodoc2-docstring} SatosaDocumentation.response.BadRequest._status
```

````

`````

`````{py:class} Created(message=None, status=None, headers=None, content=None)
:canonical: SatosaDocumentation.response.Created

Bases: {py:obj}`SatosaDocumentation.response.Response`

```{autodoc2-docstring} SatosaDocumentation.response.Created
```

```{rubric} Initialization
```

```{autodoc2-docstring} SatosaDocumentation.response.Created.__init__
```

````{py:attribute} _status
:canonical: SatosaDocumentation.response.Created._status
:value: >
   '201 Created'

```{autodoc2-docstring} SatosaDocumentation.response.Created._status
```

````

`````

`````{py:class} NotFound(message=None, status=None, headers=None, content=None)
:canonical: SatosaDocumentation.response.NotFound

Bases: {py:obj}`SatosaDocumentation.response.Response`

```{autodoc2-docstring} SatosaDocumentation.response.NotFound
```

```{rubric} Initialization
```

```{autodoc2-docstring} SatosaDocumentation.response.NotFound.__init__
```

````{py:attribute} _status
:canonical: SatosaDocumentation.response.NotFound._status
:value: >
   '404 Not Found'

```{autodoc2-docstring} SatosaDocumentation.response.NotFound._status
```

````

`````

`````{py:class} Redirect(redirect_url, headers=None, content=None)
:canonical: SatosaDocumentation.response.Redirect

Bases: {py:obj}`SatosaDocumentation.response.Response`

```{autodoc2-docstring} SatosaDocumentation.response.Redirect
```

```{rubric} Initialization
```

```{autodoc2-docstring} SatosaDocumentation.response.Redirect.__init__
```

````{py:attribute} _status
:canonical: SatosaDocumentation.response.Redirect._status
:value: >
   '302 Found'

```{autodoc2-docstring} SatosaDocumentation.response.Redirect._status
```

````

`````

`````{py:class} Response(message=None, status=None, headers=None, content=None)
:canonical: SatosaDocumentation.response.Response

Bases: {py:obj}`object`

```{autodoc2-docstring} SatosaDocumentation.response.Response
```

```{rubric} Initialization
```

```{autodoc2-docstring} SatosaDocumentation.response.Response.__init__
```

````{py:method} __call__(environ, start_response)
:canonical: SatosaDocumentation.response.Response.__call__

```{autodoc2-docstring} SatosaDocumentation.response.Response.__call__
```

````

````{py:attribute} _content_type
:canonical: SatosaDocumentation.response.Response._content_type
:value: >
   'text/html'

```{autodoc2-docstring} SatosaDocumentation.response.Response._content_type
```

````

````{py:attribute} _status
:canonical: SatosaDocumentation.response.Response._status
:value: >
   '200 OK'

```{autodoc2-docstring} SatosaDocumentation.response.Response._status
```

````

`````

`````{py:class} SeeOther(redirect_url, headers=None, content=None)
:canonical: SatosaDocumentation.response.SeeOther

Bases: {py:obj}`SatosaDocumentation.response.Redirect`

```{autodoc2-docstring} SatosaDocumentation.response.SeeOther
```

```{rubric} Initialization
```

```{autodoc2-docstring} SatosaDocumentation.response.SeeOther.__init__
```

````{py:attribute} _status
:canonical: SatosaDocumentation.response.SeeOther._status
:value: >
   '303 See Other'

```{autodoc2-docstring} SatosaDocumentation.response.SeeOther._status
```

````

`````

`````{py:class} ServiceError(message=None, status=None, headers=None, content=None)
:canonical: SatosaDocumentation.response.ServiceError

Bases: {py:obj}`SatosaDocumentation.response.Response`

```{autodoc2-docstring} SatosaDocumentation.response.ServiceError
```

```{rubric} Initialization
```

```{autodoc2-docstring} SatosaDocumentation.response.ServiceError.__init__
```

````{py:attribute} _status
:canonical: SatosaDocumentation.response.ServiceError._status
:value: >
   '500 Internal Service Error'

```{autodoc2-docstring} SatosaDocumentation.response.ServiceError._status
```

````

`````

`````{py:class} Unauthorized(message, headers=None, content=None)
:canonical: SatosaDocumentation.response.Unauthorized

Bases: {py:obj}`SatosaDocumentation.response.Response`

```{autodoc2-docstring} SatosaDocumentation.response.Unauthorized
```

```{rubric} Initialization
```

```{autodoc2-docstring} SatosaDocumentation.response.Unauthorized.__init__
```

````{py:attribute} _status
:canonical: SatosaDocumentation.response.Unauthorized._status
:value: >
   '401 Unauthorized'

```{autodoc2-docstring} SatosaDocumentation.response.Unauthorized._status
```

````

`````
