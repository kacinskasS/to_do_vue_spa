<template>
    <b-container>
        <br>
        <br>
        <br>
        <h1>This is an OPEN Issues page</h1>
        <br>
        <br>
        <b-form @submit="onSubmit">
            <b-form-group label-for="input-subject">
                <b-form-input
                        v-model="form.subject"
                        type="text"
                        required
                        id="input-subject"
                        placeholder="Enter issue"
                        autocomplete="off"
                ></b-form-input>
            </b-form-group>
            <b-form-group label-for="input-issue">
                <b-form-textarea
                        id="input-issue"
                        v-model="form.issue"
                        required
                        placeholder="Enter description"
                ></b-form-textarea>
            </b-form-group>
            <br>
            <b-button type="submit" variant="info">Enter</b-button>
            <br>
        </b-form>
        <br>
        <b-table :items="issues" :fields="fields">
            <template v-slot:cell(actions)="row">
                <b-button type="button" variant="warning" @click="onSave()" v-if="row.item.id === editId">Save
                </b-button>
                <b-button type="button" variant="warning" @click="onEdit(row.item.id, row.item.description)" v-else>
                    Edit
                </b-button>
                <b-button type="button" variant="success" @click="onDone(row.item.id)" class="mx-3">Mark as Done
                </b-button>
                <b-button type="button" variant="danger" @click="onDelete(row.item.id)">Delete</b-button>
            </template>
            <template v-slot:cell(description)="row">
                <b-form-textarea
                        id="input-issue"
                        v-model="newDescription"
                        required
                        placeholder="Enter description"
                        v-if="row.item.id === editId"
                ></b-form-textarea>
                <span v-else>{{row.item.description}} </span>
            </template>
        </b-table>
    </b-container>
</template>


<script>
    import {mapActions, mapGetters} from 'vuex'

    export default {
        data() {
            return {
                form: {subject: '', issue: ''},
                fields: [
                    {key: 'subject', label: 'Issue'},
                    {key: 'description', label: 'Description'},
                    {key: 'actions', label: 'Actions'},
                ],

                editId: null,
                newDescription: ''

            }
        },

        methods: {
            onSubmit(event) {
                event.preventDefault();
                this.addIssue({subject: this.form.subject, description: this.form.issue});
                this.form.subject = '';
                this.form.issue = '';
            },

            onDelete(id) {
                this.deleteIssue(id)
            },

            onDone(id) {
                this.markAsDone(id)
            },

            onEdit(id, description) {
                this.editId = id;
                this.newDescription = description
            },

            onSave() {
                this.editDescription({id: this.editId, description: this.newDescription});
                this.editId = null;
                this.newDescription = ''
            },


            ...mapActions('issues', ['addIssue', 'deleteIssue', 'markAsDone', 'editDescription'])
        },

        computed: {
            ...mapGetters('issues', {issues: 'getIssues'})
        }
    }

</script>
