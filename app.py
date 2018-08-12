from flask import Flask, render_template, request

app = Flask(__name__)
keySkills = ['Java', 'C', 'Flask', 'Python', 'Swift']
work_exp = [
    {
        'company':"Xyz Inc",
        'duration':"May 2018 June 2018",
        'description':"Batch of 2019 (Badi Galti)"
    },
    {
        'company':"jhksjf University",
        'duration':"May 2018 June 2018",
        'description':"Batch of 2024 (Sabse Badi Galti)"
    },
{
        'company':"jhksjf University",
        'duration':"May 2018 June 2018",
        'description':"Batch of 2024 (Sabse Badi Galti)"
    },
{
        'company':"jhksjf University",
        'duration':"May 2018 June 2018",
        'description':"Batch of 2024 (Sabse Badi Galti)"
    }
]

education = [
    {
        'school':"Nirma University",
        'degree':"Computer",
        'description':"Batch of 2019 (Badi Galti)"
    },
    {
        'school':"jhksjf University",
        'degree':"Computer",
        'description':"Batch of 2024 (Sabse Badi Galti)"
    }
]

@app.route('/')
def hello_world():
    return render_template('index.html', name="Satya Patel", keySkills = keySkills, education = education, work_exp = work_exp)

@app.route('/View')
def hello():
    return 'Welcome to Home Page!'
@app.route('/go', methods=['POST'])
def go():
    if(request.method == 'POST'):
        name = 'satya'#request.form['name_0']
        return render_template('Template1.html', name=name, keySkills = keySkills, education = education, work_exp = work_exp)
@app.route('/form')
def form():
    return render_template('getform.html')
if __name__ == '__main__':
    app.run()
    app.debug(True)