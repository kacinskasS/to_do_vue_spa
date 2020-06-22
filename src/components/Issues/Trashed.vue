<template>
    <b-container>
        <br>
        <br>
        <br>
        <h1>This is an TRASHED Issues page</h1>
        <br>
        <br>
        <b-table :items="issues" :fields="fields">
            <template v-slot:cell(actions)="row">
                <b-button type="button" variant="warning" @click="onSave()" v-if="row.item.id === editId">Save
                </b-button>
                <b-button type="button" variant="warning" @click="onEdit(row.item.id, row.item.description)" v-else>
                    Edit
                </b-button>
                <b-button type="submit" variant="primary" v-if="row.item.done" @click="onNotDone(row.item.id)"
                          class="mx-3">Mark as Not
                    Done
                </b-button>
                <b-button type="submit" variant="success" v-if="!row.item.done" @click="onDone(row.item.id)"
                          class="mx-3">Mark as Done
                </b-button>
                <b-button type="submit" variant="danger" @click="onRestore(row.item.id)">Restore</b-button>
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
            <template v-slot:cell(done)="row">
                {{row.item.done? 'Done' : 'Not Done'}}
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
                    {key: 'done', label: 'Status'},
                    {key: 'actions', label: 'Actions'},
                ],

                editId: null,
                newDescription: ''

            }
        },

        methods: {
            onNotDone(id) {
                this.markAsNotDone(id)
            },

            onDone(id) {
                this.markAsDone(id)
            },

            onRestore(id) {
                this.restore(id)
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

            ...mapActions('issues', ['markAsNotDone', 'markAsDone', 'restore', 'editDescription'])
        },

        computed: {
            ...mapGetters('issues', {issues: 'getDeletedIssues'})
        }
    }

</script>


