<template>
    <div id="app">
        <div id="box">
            <h1>uwubin</h1>
            <h1 style="display: none;" id="alert-thingie">
                {{ warnMessage }}
            </h1>
        </div>
        <div class="textarea-box">
            <textarea
                name="text"
                rows="auto"
                class="form-control"
                placeholder="console.log('Hello World');"
                wrap="hard"
                spellcheck="false"
                maxlength="100000"
                id="uwu-text"
            ></textarea>
        </div>
        <div id="input-box">
            <div class="form-group">
                <label class="col-form-label" for="inputDefault"
                    >Insert your paste id here...</label
                >
                <input
                    type="text"
                    class="form-control center"
                    placeholder="Paste ID"
                    id="pasteid"
                />
                <label class="col-form-label" for="inputDefault"
                    >Insert your owner key here...</label
                ><input
                    type="password"
                    class="form-control center"
                    placeholder="Owner Key"
                    id="ownerkey"
                />
            </div>
        </div>
        <div class="button-box">
            <button
                type="button"
                class="btn btn-outline-primary btn-lg"
                v-on:click="edit"
            >
                Edit
            </button>
        </div>
    </div>
</template>
<script>
import '../css/bootstrap.min.css';

export default {
    data: function() {
        return {
            pasteId: String,
            ownerKey: String,
            text: String,
            warnMessage: String,
        };
    },
    methods: {
        edit: async function() {
            this.text = document.getElementById('uwu-text').value;
            this.pasteId = document.getElementById('pasteid').value;
            this.ownerKey = document.getElementById('ownerkey').value;

            if (!this.text) {
                this.setWarnMessage('no text provided.', 'red');
                return this.showAlert(6e3);
            }

            if (!this.pasteId) {
                this.setWarnMessage('no paste id provided.', 'red');
                return this.showAlert(6e3);
            }
            if (!this.ownerKey) {
                this.setWarnMessage('no owner key provided.', 'red');
                return this.showAlert(6e3);
            }

            this.$axios.setHeader('Authorization', this.ownerKey);
            await this.$axios
                .$put(`http://localhost:6969/api/v1/edit/${this.pasteId}`, {
                    paste: this.text,
                })
                .then(d => {
                    if (d.success) {
                        this.setWarnMessage('edited.', 'green');
                        return this.showAlert(6e3);
                    }
                })
                .catch(e => {
                    this.setWarnMessage(
                        "couldn't edit that paste. check the inputted info twice.",
                        'red',
                    );
                    return this.showAlert(6e3);
                });
        },
        setWarnMessage: function(message, color, fontSize) {
            document.getElementById('alert-thingie').style.color = color;

            return (this.warnMessage = message);
        },
        showAlert: function(time) {
            const alert = document.getElementById('alert-thingie');

            alert.style.display = 'block';

            return setTimeout(() => {
                alert.style.display = 'none';
            }, time);
        },
    },
};
</script>

<style>
#app {
    margin: 4vmin;
}

#box {
    display: flex;
}

#input-box {
    text-align: center;
}

#alert-thingie {
    transition: 200ms;
    margin-left: auto;
}

.button-box button {
    display: block;
    width: 100%;
}

.textarea-box textarea {
    resize: none;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    margin-top: 3vmin;
    margin-bottom: 3vmin;
    height: 70vh;
}
</style>
