<template>
    <b-container>
        <br>
        <br>
        <br>
        <h1>This is an Done Issues page</h1>
        <br>
        <br>
        <b-table :items="issues" :fields="fields">
            <template v-slot:cell(actions)="row">
                <b-button type="button" variant="warning" @click="onSave()" v-if="row.item.id === editId">Save
                </b-button>
                <b-button type="button" variant="warning" @click="onEdit(row.item.id, row.item.description)" v-else>
                    Edit
                </b-button>
                <b-button type="submit" variant="primary" @click="onNotDone(row.item.id)" class="mx-3">Mark as Not
                    Done
                </b-button>
                <b-button type="submit" variant="danger" @click="onDelete(row.item.id)">Delete</b-button>
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

            onDelete(id) {
                this.deleteIssue(id)
            },

            onNotDone(id) {
                this.markAsNotDone(id)
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

            ...mapActions('issues', ['deleteIssue', 'markAsNotDone', 'editDescription'])
        },

        computed: {
            ...mapGetters('issues', {issues: 'getDoneIssues'})
        }
    }

</script>
