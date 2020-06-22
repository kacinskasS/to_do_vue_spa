<template>
    <div id="app" class="text-center">
        <b-navbar toggleable="lg" type="dark" variant="info">
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav align="center">
                    <b-nav-item to="/">Home</b-nav-item>
                    <b-nav-item to="/Issues/Open">Open</b-nav-item>
                    <b-nav-item to="/Issues/Done">Done</b-nav-item>
                    <b-nav-item to="/Issues/Trashed">Trashed</b-nav-item>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
        <router-view/>
    </div>
</template>


