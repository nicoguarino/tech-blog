# Tech Blog

## Table of Contents

- [About](#about)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Code Sample](#code-sample)
- [Acknowledgement](#acknowledgement)
- [Contributing](#contributing)
- [License](#license)

## About <a name = "about"></a>

Tech blog is a website blog designed around current coming out where users can post and comment on each others posts.

## Getting Started <a name = "getting-started"></a>

* [Git Hub Pull](https://github.com/nicoguarino/note-taker.git)
* [Deployed Website](https://nicoguarino-note-taker.herokuapp.com/notes)

## Installation <a name = "installation"></a>

No installation needed 

## Code Sample <a name = "code-sample"></a>

![Sample Code](https://github.com/nicoguarino/tech-blog/blob/main/images/sample_code.PNG?raw=true "Sample Code")

### Sample Code
```JavaScript Sample
router.get('/:id', (req, res) => {
    User.findOne({
        attributes: { exclude: ['password'] },
        where: {
            id: req.params.id
        },
        include: [
            {
                model: Post,
                attributes: ['id', 'title', 'body', 'created_at']
            },
            {
                model: Comment,
                attributes: ['id', 'comment_text', 'created_at'],
                include: {
                    model: Post,
                    attributes: ['title']
                }
            }
        ]
    })
        .then(dbUserData => {
            if (!dbUserData) {
                res.status(404).json({ message: 'No user found with this id' });
                return;
            }
            res.json(dbUserData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});
```
```CSS Sample
textarea, input {
  padding: .5%;
  border-radius: 5px;
  border: 1px solid #ccc;
}

textarea:focus, input:focus {
  outline: none;
  border: 1px solid #281930;
}

textarea {
  min-width: 40%;
  min-height: 100px;
}
```
```Handlebars Sample
<form class="login-form">
    <div>
        <label for="email-login">email:</label>
        <input type="text" id="email-login" />
    </div>
    <div>
        <label for="password-login">password:</label>
        <input type="password" id="password-login" />
    </div>
    <div>
        <button type="submit">login</button>
    </div>
</form>

<form class="signup-form">
    <div>
        <label for="email-signup">email:</label>
        <input type="text" id="email-signup" />
    </div>
    <div>
        <label for="password-signup">password:</label>
        <input type="password" id="password-signup" />
    </div>
    <div>
        <button type="submit">signup</button>
    </div>
</form>

<script src="../stylesheets/javascript/login.js"></script>
```

## Authors and acknowledgement <a name = "acknowledgement"></a>

Nico (Filipu) Guarino


## Contributing <a name = "contributing"></a>

Tech Blog is open for contrubiting, however check with the creator first before making any permanent changes. The creator is opening to creative ideas and tweeking of design, but it must be approved first.

## License <a name = "license">

(c) 2021 Tech Blog