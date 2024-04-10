from flask import Flask, render_template, request, redirect, url_for

app = Flask('__name__',template_folder="templates")

@app.route('//')
def home():
    return render_template('home.html')

@app.route('/register/',methods=["GET","POST"])
def register():
    if request.method == "POST":
        return redirect(f"{url_for('email_verification',vid='aLongAssVerificationId')}")
    else:
        return render_template('register.html')

@app.route('/login/',methods=["GET","POST"])
def login():
    if request.method == "POST":
        return redirect(f"{url_for('account')}")
    else:
        return render_template('login.html')

@app.route('/verify/<vid>',methods=["GET","POST"])
def email_verification(vid):
    if request.method == "POST":
        return redirect(f"{url_for('login')}")
    else:
        return render_template('verification.html')

@app.route('/account/',methods=["GET","POST"])
def account():
    if request.method == "POST":
        return request.form
    else:
        return render_template("account.html")
    

@app.route('/account/<path>/',methods=["GET","POST"])
def accountPath(path):
    if path in ('setting', 'settings', 'options', 'option'):
        if request.method == "POST":
            return request.form
        else:
            return render_template("accSettings.html")
    else:
        return('',404)

@app.route('/shop/<option>/')
def shopOption(option):
    if option == 'add':
        if request.method == "POST":
            return request.form
        else:
            return render_template("addShop.html")
    elif option == 'edit':
        if request.method == "POST":
            return request.form
        else:
            return render_template("editShop.html")
    elif option in ('items','item'):
        if request.method == "POST":
            return request.form
        else:
            return render_template("ShopItem.html")
    else:
        return('',404)
    
@app.route('/test/<page>')
def renderTempOnDemand(page):
    return render_template(f'{page}.html')

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=6969 , debug=True)