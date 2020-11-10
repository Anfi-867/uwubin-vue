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
        <div class="button-box">
            <button
                type="button"
                class="btn btn-outline-primary btn-lg"
                v-on:click="paste"
            >
                Paste
            </button>
        </div>
    </div>
</template>
<script>
import '../css/bootstrap.min.css';

export default {
    data: function() {
        return {
            link: String,
            text: String,
            warnMessage: String,
            pasteData: String,
        };
    },
    methods: {
        paste: async function() {
            this.text = document.getElementById('uwu-text').value;

            if (!this.text) {
                this.setWarnMessage('no input provided.', 'red');
                this.showAlert(6e3);
            } else {
                const data = await this.$axios.$post(
                    'http://localhost:6969/api/v1/create',
                    {
                        paste: this.text,
                    },
                );

                document.getElementById(
                    'uwu-text',
                ).value = `ID: ${data.id} (${this.link}/${data.id}) :: Owner Key: ${data.ownerKey} (Used to edit, delete and find pastes. )`;
            }
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
    mounted() {
        this.link = 'http://localhost:3000';
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
