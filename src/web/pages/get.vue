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
                placeholder="Paste the id below..."
                wrap="hard"
                spellcheck="false"
                maxlength="100000"
                id="uwu-text"
            ></textarea>
            <!-- No syntax highlighting, fuck you. -->
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
            </div>
        </div>
        <div class="button-box">
            <button
                type="button"
                class="btn btn-outline-primary btn-lg"
                v-on:click="get"
            >
                Get
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
            warnMessage: String,
            pasteData: String,
        };
    },
    methods: {
        get: async function() {
            this.pasteId = document.getElementById('pasteid').value;

            if (!this.pasteId) {
                this.setWarnMessage('no paste id provided.', 'red');
                return this.showAlert(6e3);
            }

            await this.$axios
                .$get(`http://localhost:6969/api/v1/get/${this.pasteId}`)
                .then(d => {
                    if (d.success) {
                        document.getElementById('uwu-text').value = d.paste;
                    } else {
                        console.log('not success bru');
                    }
                })
                .catch(e => {
                    this.setWarnMessage(
                        "couldn't get that paste. check the inputted info twice.",
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

.center {
    text-align: center;
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
