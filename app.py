from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/')
def hello_world():
    return render_template('index.html', name="Satya Patel", keySkills = keySkills, education = education, work_exp = work_exp)

@app.route('/View')
def hello():
    return 'Welcome to Home Page!'


## After clicking Submit
@app.route('/go', methods=['POST'])
def go():
    if(request.method == 'POST'):
        name = request.form['name']
        email = request.form['email']
        contact = request.form['contact']
        profile = request.form['profile']


        work_exp_count = request.form['work_exp_count']
        work_exp = []
        for i in range(int(work_exp_count)):
            a = request.form['workexp_'+str(i+1)].split("\n")
            work_exp.append({
                'company':a[0],
                'duration': a[1],
                'description': a[2]
            })

        education_count = request.form['education_count']
        education = []
        for i in range(int(education_count)):
            a = request.form['education_' + str(i + 1)].split("\n")
            education.append({
            'school':a[0],
            'degree':a[1],
            'description':a[2]
        })

        skills_count = request.form['skills_count']
        keySkills = []
        for i in range(int(skills_count)):
            a = request.form['skills_' + str(i + 1)]
            keySkills.append(a)
        return render_template('index.html', name=name, email=email, contact=contact, profile=profile, keySkills = keySkills, education = education, work_exp = work_exp)

## For Rendering Form
@app.route('/form')
def form():
    return render_template('getform.html')
if __name__ == '__main__':
    app.run()
    app.debug(True)
