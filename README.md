# DjangoPlotLy

Tests using Plot.ly inside Django

## Installation

Requirements are in the requirements.txt file.

Use `virtualenv`:

```bash
virtualenv env
source env/bin/activate
pip install -U -r requirements.txt
# Run it
cd site1/
python manage.py  runserver
```

# Data:

You will need several data files to run the full application. These are:

* IPTS-15041.tar.gz
* IPTS-11354.tar.gz
* Original.tar.gz

To extract and reformat this data, you can run the command:

```bash
make site1/app1/static/data/.INTERMEDIATE
```

Later, you can delete the extracted data with

```bash
make clean
```

# Run it:

Once the data is extracted:

```bash
cd site1/
./manage.py makemigrations
./manage.py migrate
./manage.py collectstatic
./manage.py runserver
```

Alternatively, you can use this command to both create the data files and run
the server.

```bash
make
```

Go to:
[http://127.0.0.1:8000](http://127.0.0.1:8000)


## Code:

The main code is in:
```
site1/app1
```

Views:
```
site1/app1/views.py
```

Code for plots is here:
```
site1/app1/plots.py
```

## Magic:

The magic is here:

Python code returns HTML/Javascript that is rendered in the template:

```python
fig = go.Figure(data=data, layout=layout)
plot_div = plot(fig, output_type='div', include_plotlyjs=False)
return plot_div
```

Template rendering the Plot:

HTML head:
```html
<script src="https://cdn.plot.ly/plotly-latest.min.js"></script>
```

Somewhere in the HTML body:
```html
<div class="col-md-12">{{plot|safe}}</div>
```
