#include <stdio.h>

#include <stdbool.h>

#include <string.h>



#define MAX_USERNAME_LENGTH 20

#define MAX_PASSWORD_LENGTH 20



bool authenticate(const char* username, const char* password) {

    // Simulating authentication logic

    if (strcmp(username, "admin") == 0 && strcmp(password, "password") == 0) {

        return true;

    } else {

        return false;

    }

}



int main() {

    char username[MAX_USERNAME_LENGTH];

    char password[MAX_PASSWORD_LENGTH];



    printf("Enter username: ");

    fgets(username, sizeof(username), stdin);

    username[strcspn(username, "\n")] = '\0'; // Remove the trailing newline character



    printf("Enter password: ");

    fgets(password, sizeof(password), stdin);

    password[strcspn(password, "\n")] = '\0'; // Remove the trailing newline character



    if (authenticate(username, password)) {

        printf("Authentication successful. Access granted.\n");

        // Place your file access code here

    } else {

        printf("Authentication failed. Access denied.\n");

    }



    return 0;

}